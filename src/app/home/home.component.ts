import { Component, OnInit } from '@angular/core';
import { Tile } from '../tiles';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {img: '/assets/imgs/bibliotheque.jpg', title: 'Bibliothèque', link:'/bibliotheque'},
    {img: '/assets/imgs/magasin.jpg', title: 'Magasin', link:'/store'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
