import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { AddGameComponent } from './add-game/add-game.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { StoreComponent } from './store/store.component';
import { MyAccountComponent } from './my-account/my-account.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { TileComponent } from './tile/tile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    AddGameComponent,
    BibliothequeComponent,
    StoreComponent,
    MyAccountComponent,
    HomeComponent,
    TileComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    SearchResultsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
