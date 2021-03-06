import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // get games
  getGames(keyword): Observable<any> {
    return this.http.get<any>(this.apiURL + '/search/' + keyword)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // get details games ID
  getInfoGames(ID): Observable<any> {
    return this.http.get<any>(this.apiURL + '/game/' + ID)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // get game img Url
  getImgUrl(id): Observable<any> {
    return this.http.get<any>(this.apiURL + '/img/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // post review
  postReview(value, gameId): Observable<any> {
    console.log(value, gameId);
    return this.http.post<any>(this.apiURL + '/users/1/games/' + gameId + '/review', {score: value} )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // get user reviews
  getUserReviews(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/users/1/reviews')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // errors msgs
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = error.error.message;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}

