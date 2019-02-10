import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from "../../app/rest-api.service";

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {
  @Input() review
  gameDetails: any = []

  constructor(
    public restApi: RestApiService,
  ) { }
  detailGames(id:any): void {
    this.restApi.getInfoGames(id).subscribe((data: {}) => {
       this.gameDetails = data[0];
    })
  }
  ngOnInit() {
    this.detailGames(this.review.gameId)
  }

}
