import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from "../../app/rest-api.service";

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {
  @Input() review;
  gameDetails: any = [];
  imgUrl = 'https://images.igdb.com/igdb/image/upload/t_720p/';
  myValue = 0;
  isPlayed = false;

  constructor(
    public restApi: RestApiService,
  ) { }

  detailGames(id:any): void {
    this.restApi.getInfoGames(id).subscribe((data: {}) => {
       this.gameDetails = data[0];
    })
  }

  getImgUrl(id:any) {
    this.restApi.getImgUrl(id).subscribe((data: {}) => {
      if (data[0].hasOwnProperty('image_id')) {
        this.imgUrl += data[0].image_id + '.jpg';
      } else { //@todo default image if not available
        this.imgUrl = './assets/imgs/game.png'
      }
   })
  }

  postReview(value, gameId) {
    this.restApi.postReview(value, gameId).subscribe();
    this.isPlayed = false;
    this.review.score = value;
  }

  Played() {
    this.isPlayed = true;
  }
  ngOnInit() {
    this.detailGames(this.review.gameId)
    this.getImgUrl(this.review.gameId)
  }

}
