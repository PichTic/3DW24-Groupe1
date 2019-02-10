import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../app/rest-api.service";

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.scss']
})

export class BibliothequeComponent implements OnInit {
  userReviews:any = [];
  constructor(
    public restApi: RestApiService,
  ) { }
  getUserReviews(): void {
    this.restApi.getUserReviews().subscribe((data: {}) => {
       this.userReviews = data;
    })
  }
  ngOnInit() {
    this.getUserReviews()
  }

}
