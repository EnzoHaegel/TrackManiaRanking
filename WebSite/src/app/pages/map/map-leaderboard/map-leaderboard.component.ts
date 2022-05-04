import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayerRun, IMap, ILeaderBoard } from 'src/app/models/IModels';
import { TmioApiService } from 'src/app/services/tmio-api.service';


const date = new Date().toDateString() + ' ' + new Date().toTimeString().substring(0, 5)

@Component({
  selector: 'app-map-leaderboard',
  templateUrl: './map-leaderboard.component.html',
  styleUrls: ['./map-leaderboard.component.scss'],
})
export class MapLeaderboardComponent implements OnInit {
  @Input() map!: IMap;
  @Input() leaderboardUuid: string | undefined;

  public displayedColumns: string[] = ['position', 'player', 'time', 'medal', 'date'];
  public dataSource: IPlayerRun[] = [];
  public clickedRows = new Set<IPlayerRun>();
  public leaderBoard!: ILeaderBoard;

  constructor(private tmioApiService: TmioApiService) {}

  ngOnInit(): void {
    console.log(this.map)
    if (this.map && this.leaderboardUuid) {
      this.tmioApiService.getLeaderboard(this.leaderboardUuid, this.map.mapUid, 15).subscribe({
        next: (leaderBoard) => {
          this.leaderBoard = leaderBoard;
          this.dataSource = this.leaderBoard.tops;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  onTableScroll(e: any) {
    const tableViewHeight = e.target.offsetHeight // viewport: ~500px
    const tableScrollHeight = e.target.scrollHeight // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled
    
    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;    
    if (scrollLocation > limit) {
      // concat more data to existing data
      this.dataSource = this.dataSource.concat(this.leaderBoard.tops);
    }
  }

  public onRowClicked(row: IPlayerRun) {
    console.log(row);
  }

  public applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public returnTime(time: number) {
    let millisecondes = ('0' + ('0' + time % 1000).slice(-3)).slice(-3);
    let secondes = Math.floor(time / 1000) % 60;
    let minutes = Math.floor(time / 60000) % 60;
    let heures = Math.floor(time / 3600000) % 24;
    let jours = Math.floor(time / 86400000);
    // return time but without these that are 0
    let res = "";
    time >= 86400000 ? res += jours + ":" : "";
    time >= 3600000 ? res += (time >= 86400000 ? ('0' + heures).slice(-2) : heures) + ":" : "";
    time >= 60000 ? res += (time >= 3600000 ? ('0' + minutes).slice(-2) : minutes) + ":" : "";
    time >= 1000 ? res += (time >= 60000 ? ('0' + secondes).slice(-2) : secondes) + "." : (time >= 60000 ? "00." : "0.");
    return res + millisecondes;
  }

  public getFlagUrl(flag: string) {
    let URL = "https://trackmania.io/img/flags/"
    return URL + flag + ".jpg";
  }

  public getMedalImage(medal: string) {
    let URL = "https://trackmania.io/img/medal_"
    return URL + medal + ".png";
  }
}
