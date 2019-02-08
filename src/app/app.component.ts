import {MediaMatcher} from '@angular/cdk/layout';
import { RestApiService } from "../app/rest-api.service";
import { ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {SearchResultsComponent} from "./search-results/search-results.component";
import {GameDetailComponent}  from './game-detail/game-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  title = 'Game Tracker';
  mobileQuery: MediaQueryList;
  keyword: string;
  ID:string;
  showResults = false;
  // games: any = [];

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);


  private _mobileQueryListener: () => void;

  constructor(private bottomSheet: MatBottomSheet, public restApi: RestApiService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  searchGames(): void {
    console.log('triggered search games');
    this.restApi.getGames(this.keyword).subscribe((data: {}) => {
      this.bottomSheet.open(SearchResultsComponent, {
        data: data,
      });
    })

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
