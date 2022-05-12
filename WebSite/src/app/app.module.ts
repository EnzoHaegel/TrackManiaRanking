import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './pages/map/map.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MapInfosComponent } from './pages/map/map-infos/map-infos.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NgColoredTmTextModule } from 'ng-colored-tm-text';
import { MapLeaderboardComponent } from './pages/map/map-leaderboard/map-leaderboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { TotdComponent } from './pages/totd/totd.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlayerProfilComponent } from './pages/player-profil/player-profil.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ColorTesterComponent } from './pages/color-tester/color-tester.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapInfosComponent,
    MapLeaderboardComponent,
    TotdComponent,
    PlayerProfilComponent,
    ColorTesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    NgColoredTmTextModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
