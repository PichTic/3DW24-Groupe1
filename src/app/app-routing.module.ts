import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGameComponent } from './add-game/add-game.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { StoreComponent } from './store/store.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HomeComponent } from './home/home.component';
import { GameDetailComponent }  from './game-detail/game-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addgame', component: AddGameComponent },
  { path: 'bibliotheque', component: BibliothequeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'myaccount', component: MyAccountComponent },
  { path: 'game/:GameId', component: GameDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
