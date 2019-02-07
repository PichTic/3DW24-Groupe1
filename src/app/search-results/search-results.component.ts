import { Component, OnInit, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { GameDetailComponent }  from '../game-detail/game-detail.component';
import { RestApiService } from "../../app/rest-api.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
	game: any = {};

  constructor(public restApi: RestApiService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}

 detailGames(id): void {
    this.restApi.getInfoGames(id).subscribe((data: {}) => {
      this.game = data;
      console.log(this.game);
    })

  }

  ngOnInit() {
  }

}
