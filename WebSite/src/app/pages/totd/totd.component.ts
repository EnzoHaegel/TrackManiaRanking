import { Component, OnInit } from '@angular/core';
import { IMonthTotd } from 'src/app/models/IModels';
import { TmioApiService } from 'src/app/services/tmio-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-totd',
  templateUrl: './totd.component.html',
  styleUrls: ['./totd.component.scss']
})
export class TotdComponent implements OnInit {
  public maps!: IMonthTotd;
  public month: number = 0;

  constructor(private tmioApiService: TmioApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.month = parseInt(params['month'] ? params['month'] : '0');
        this.tmioApiService.getMonthlyTotd(this.month).subscribe({
          next: (maps) => {
            this.maps = maps;
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    );
    this.tmioApiService.getMonthlyTotd(this.month).subscribe({
      next: (maps) => {
        this.maps = maps;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public lastMonthClicked() {
    this.month += 1;
    this.tmioApiService.getMonthlyTotd(this.month).subscribe({
      next: (maps) => {
        this.maps = maps;
      }
    });
  }

  public nextMonthClicked() {
    this.month -= 1;
    this.tmioApiService.getMonthlyTotd(this.month).subscribe({
      next: (maps) => {
        this.maps = maps;
      }
    });
  }

  public calcFontSize(text: string, containerSize: number): number {
    let fontSize = Math.floor(containerSize / text.length);
    if (fontSize < 12) {
      fontSize = 12;
    }
    if (fontSize > 20) {
      fontSize = 20;
    }
    return fontSize;
  }
}
