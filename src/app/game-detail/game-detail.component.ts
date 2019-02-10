import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../app/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  gameDetails:object = {};
  imgUrl = 'https://images.igdb.com/igdb/image/upload/t_720p/';
  myValue = 0;
  isPlayed = false;


  constructor(
    public restApi: RestApiService,
    private route: ActivatedRoute,
    private router: Router
    )
    {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

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
  }

  onChange() {
    console.log(this.myValue);
  }
  Played() {
    this.isPlayed = true;
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.detailGames(id)
    this.getImgUrl(id)
  }

}
