import { Injectable } from '@angular/core';
import { ILeaderBoard, IMap, IMeta, IMonthTotd, IPlayer, IPlayerRun, ITotd, IZone } from '../models/IModels';

@Injectable({
  providedIn: 'root'
})
export class ApiMapperService {

  constructor() { }

  public mapMapper(data: any): IMap {
    return {
      author: data.author,
      name: data.name,
      mapType: data.mapType,
      mapStyle: data.mapStyle,
      authorScore: data.authorScore,
      goldScore: data.goldScore,
      silverScore: data.silverScore,
      bronzeScore: data.bronzeScore,
      collectionName: data.collectionName,
      filename: data.filename,
      isPlayable: data.isPlayable,
      mapId: data.mapId,
      mapUid: data.mapUid,
      submitter: data.submitter,
      timestamp: data.timestamp,
      fileUrl: data.fileUrl,
      thumbnailUrl: data.thumbnailUrl,
      authorplayer: this.playerMapper(data.authorplayer),
      submitterplayer: this.playerMapper(data.submitterplayer),
      exchangeid: data.exchangeid
    };
  }

  public playerMapper(data: any): IPlayer {
    return {
      name: data.name,
      tag: data.tag,
      id: data.id,
      zone: data.zone ? this.zoneMapper(data.zone) : null,
      meta: this.metaMapper(data.meta)
    };
  }

  public zoneMapper(data: any): IZone {
    return {
      name: data.name,
      flag: data.flag,
      parent: data.parent ? this.zoneMapper(data.parent) : null
    };
  }

  public metaMapper(data: any): IMeta {
    return {
      twitch: data.twitch,
      youtube: data.youtube,
      twitter: data.twitter
    };
  }

  public playerRunMapper(data: any): IPlayerRun {
    return {
      player: this.playerMapper(data.player),
      position: data.position,
      time: data.time,
      filename: data.filename,
      timestamp: data.timestamp,
      url: data.url
    };
  }

  public leaderBoardMapper(data: any): ILeaderBoard {
    return {
      tops: data.tops.map((x: any) => this.playerRunMapper(x))
    };
  }

  public totdMapper(data: any): ITotd {
    return {
      campaignid: data.campaignid,
      leaderboarduid: data.leaderboarduid,
      map: this.mapMapper(data.map),
      monthday: data.monthday,
      weekday: data.weekday
    };
  }

  public monthTotdMapper(data: any): IMonthTotd {
    return {
      days: data.days.map((x: any) => this.totdMapper(x)),
      lastday: data.lastday,
      month: data.month,
      monthcount: data.monthcount,
      monthoffset: data.monthoffset,
      year: data.year
    };
  }
}
