import { Component, OnInit } from '@angular/core';
import { IMap, IMonthTotd } from 'src/app/models/IModels';
import { TmioApiService } from 'src/app/services/tmio-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public mapUid: string | undefined;
  public leaderboarduid: string | undefined;

  public map!: IMap;
  public maps!: IMonthTotd;

  constructor(
    private _location: Location,
    private tmioApiService: TmioApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.mapUid = params['mapUid'];
        this.leaderboarduid = params['leaderboarduid'];
        if (this.mapUid) {
          this.tmioApiService.getMap(this.mapUid).subscribe({
            next: (map) => {
              this.map = map;
            },
            error: (err) => {
              console.log(err);
            }
          });
        }
      }
    );
  }

  public backClicked() {
    this._location.back();
  }
}
