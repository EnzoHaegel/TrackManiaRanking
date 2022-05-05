import { Component, Input, OnInit } from '@angular/core';
import { IPlayerRun, IMap, ILeaderBoard, IZone } from 'src/app/models/IModels';
import { TmioApiService } from 'src/app/services/tmio-api.service';
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
  public showedDataSource: IPlayerRun[] = [];
  public clickedRows = new Set<IPlayerRun>();
  public leaderBoard!: ILeaderBoard;
  public load: boolean = false;

  constructor(private tmioApiService: TmioApiService) {}

  ngOnInit(): void {
    if (this.map && this.leaderboardUuid) {
      this.tmioApiService.getLeaderboard(this.leaderboardUuid, this.map.mapUid, 20).subscribe({
        next: (leaderBoard) => {
          this.leaderBoard = leaderBoard;
          this.dataSource = this.leaderBoard.tops;
          this.showedDataSource = this.dataSource;
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
      if (this.map && this.leaderboardUuid && !this.load) {
        this.load = true;
        this.tmioApiService.getLeaderboard(this.leaderboardUuid, this.map.mapUid, 20, this.dataSource.length).subscribe({
          next: (leaderBoard) => {
            this.leaderBoard = leaderBoard;
            this.dataSource = this.dataSource.concat(this.leaderBoard.tops);
            this.showedDataSource = this.dataSource;
            this.load = false;
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
  }

  public onRowClicked(row: IPlayerRun) {
    console.log(row);
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

  public getFlagUrl(zone: IZone): string {
    if (zone && zone.parent && (zone.flag.toUpperCase() !== zone.flag || zone.flag.length != 3)) {
      return this.getFlagUrl(zone.parent);
    }
    let URL = "https://trackmania.io/img/flags/"
    return URL + (zone.flag ? zone.flag : 'WOR') + ".jpg";
  }

  public getMedalImage(medal: string) {
    let URL = "https://trackmania.io/img/medal_"
    return URL + medal + ".png";
  }

  public calcMedal(time: number) {
    if (time <= this.map.authorScore)
      return "author";
    else if (time <= this.map.goldScore)
      return "gold";
    else if (time <= this.map.silverScore)
      return "silver";
    else if (time <= this.map.bronzeScore)
      return "bronze";
    else
      return "";
  }

  public dateFormatted(date: string) {
    let dateArray = date.split('T');
    return dateArray[0] + ' ' + dateArray[1].substring(0, 5);
  }

  public sortBySearchedUsername(event: any) {
    let searchedUsername = event.target.value;
    // remove all rows that are not the searched username
    this.showedDataSource = this.dataSource.filter((row) => {
      return row.player.name.toLowerCase().includes(searchedUsername.toLowerCase());
    });
  }
}
