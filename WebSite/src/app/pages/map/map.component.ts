import { Component, Input, OnInit } from '@angular/core';
import { IMap, IMonthTotd } from 'src/app/models/IModels';
import { TmioApiService } from 'src/app/services/tmio-api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() mapId: string | undefined;

  public map!: IMap;
  public maps!: IMonthTotd;  
  constructor(private tmioApiService: TmioApiService) { }

  ngOnInit(): void {
    this.tmioApiService.getMonthlyTotd().subscribe({
      next: (maps) => {
        this.maps = maps;
        this.tmioApiService.getMap(this.maps.days[1].map.mapUid).subscribe({
          next: (map) => {
            this.map = map;
            console.log(map)
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
