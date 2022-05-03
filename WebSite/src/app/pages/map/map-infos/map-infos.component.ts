import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TmColorsText } from '@icenore/ng-tm-colors-text';

const map = {
  "author": "c8a6ac6d-6847-4dbd-b052-6475da149518",
  "name": "Eggflip",
  "mapType": "TrackMania\\TM_Race",
  "mapStyle": "",
  "authorScore": 7607,
  "goldScore": 9000,
  "silverScore": 10000,
  "bronzeScore": 12000,
  "collectionName": "Stadium",
  "filename": "Eggflip.Map.Gbx",
  "isPlayable": true,
  "mapId": "999aaf7a-fdc5-4f2d-9972-8c1d67f83339",
  "mapUid": "MH8WnAOEI3HAQkBVlBOeyK4rLC9",
  "submitter": "deb52738-18fd-4a49-b94e-208d18338150",
  "timestamp": "2022-04-16T18:31:20+00:00",
  "fileUrl": "https://prod.trackmania.core.nadeo.online/storageObjects/67c0eb93-8b66-4c7b-a937-3a098e21f41e",
  "thumbnailUrl": "https://prod.trackmania.core.nadeo.online/storageObjects/4e6cfdf3-d2ec-43d8-bd99-44f1a5016ee9.jpg",
  "authorplayer": {
    "name": "NachoQT",
    "tag": "$O$FF0I$FFFI$D4DI$333I",
    "id": "c8a6ac6d-6847-4dbd-b052-6475da149518",
    "zone": {
      "name": "Victoria",
      "flag": "Victoria",
      "parent": {
        "name": "Australia",
        "flag": "AUS",
        "parent": {
          "name": "Oceania",
          "flag": "oceania",
          "parent": { "name": "World", "flag": "WOR" }
        }
      }
    },
    "meta": {
      "twitch": "NachoQT",
      "youtube": "UChu8enTVUqyI_sHI1TuU7gg",
      "twitter": "NachoQT_"
    }
  },
  "submitterplayer": {
    "name": "richarde_e",
    "tag": "$FA5S$AF1P$D41E$AF1E$FA5D",
    "id": "deb52738-18fd-4a49-b94e-208d18338150",
    "zone": {
      "name": "Lithuania",
      "flag": "LTU",
      "parent": {
        "name": "Europe",
        "flag": "europe",
        "parent": { "name": "World", "flag": "WOR" }
      }
    },
    "meta": {}
  },
  "exchangeid": 57885
}

@Component({
  selector: 'app-map-infos',
  templateUrl: './map-infos.component.html',
  styleUrls: ['./map-infos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapInfosComponent implements OnInit {

  public map = map;
  constructor() { }

  ngOnInit(): void {
  }

  public downloadMap() {
    console.log("download map");
  }

  public returnTime(time: number) {
    // time = 76072
    let millisecondes = ('0' + time % 1000).slice(-3);
    let secondes = Math.floor(time / 1000) % 60;
    let minutes = Math.floor(time / 60000) % 60;
    return minutes === 0 ? secondes + "." + millisecondes : minutes + ":" + ('0' + secondes).slice(-2) + "." + millisecondes;
  }

  public getFlagUrl(flag: string) {
    let URL = "https://trackmania.io/img/flags/"
    return URL + flag + ".jpg";
  }

  public countDifferentsCharsInTag(tag: string) {
    return TmColorsText(tag, 18).length;
  }

  public returnArrayOfInt(number: number) {
    return Array.from(Array(number).keys());
  }

  public getStyleIndex(tag: string, index: number): string {
    console.log(TmColorsText(tag, 18)[index])
    return TmColorsText(tag, 18)[index].style;
  }

  public getCharIndex(tag: string, index: number): string {
    return TmColorsText(tag, 18)[index].char;
  }
}
