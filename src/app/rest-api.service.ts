import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // get games
  getGames(keyword): Observable<Game> {
    return this.http.get<Game>(this.apiURL + '/search/' + keyword)
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

