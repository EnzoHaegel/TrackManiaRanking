import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IMap, IZone } from 'src/app/models/IModels';

@Component({
  selector: 'app-map-infos',
  templateUrl: './map-infos.component.html',
  styleUrls: ['./map-infos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapInfosComponent implements OnInit {
  @Input() map!: IMap;

  constructor() { }

  ngOnInit(): void {}

  public downloadMap() {
    // download the map with this.map.fileUrl url
    window.open(this.map.fileUrl, "_blank");
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

  public getFlagUrl(zone: IZone | null): string {
    if (zone && zone.parent && (zone.flag.toUpperCase() !== zone.flag || zone.flag.length != 3)) {
      return this.getFlagUrl(zone.parent);
    }
    let URL = "https://trackmania.io/img/flags/"
    return URL + (zone?.flag ? zone.flag : 'WOR') + ".jpg";
  }
}
