import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../app/rest-api.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  gameDetails:object = {};

  constructor(
    public restApi: RestApiService,
    private route: ActivatedRoute) { }

  detailGames(id:any): void {
    this.restApi.getInfoGames(id).subscribe((data: {}) => {
       this.gameDetails = data[0];
       console.log(this.gameDetails);
    })
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.detailGames(id)
  }

}
