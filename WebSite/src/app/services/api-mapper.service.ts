import { Injectable } from '@angular/core';
import {
  IAccount,
  IDivision,
  ILeaderBoard,
  IMap,
  IMatchmaking,
  IMatchmakingInfo,
  IMeta,
  IMonthTotd,
  IPlayer,
  IPlayerRun,
  ITotd,
  ITrophies,
  IZone,
} from '../models/IModels';

@Injectable({
  providedIn: 'root',
})
export class ApiMapperService {
  constructor() {}

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
      exchangeid: data.exchangeid,
    };
  }

  public playerMapper(data: any): IPlayer {
    return {
      name: data.name,
      tag: data.tag,
      id: data.id,
      zone: data.zone ? this.zoneMapper(data.zone) : null,
      meta: data.meta ? this.metaMapper(data.meta) : undefined,
    };
  }

  public zoneMapper(data: any): IZone {
    return {
      name: data.name,
      flag: data.flag,
      parent: data.parent ? this.zoneMapper(data.parent) : null,
    };
  }

  public metaMapper(data: any): IMeta {
    return {
      twitch: data.twitch ? data.twitch : undefined,
      youtube: data.youtube ? data.youtube : undefined,
      twitter: data.twitter ? data.twitter : undefined,
    };
  }

  public playerRunMapper(data: any): IPlayerRun {
    return {
      player: this.playerMapper(data.player),
      position: data.position,
      time: data.time,
      filename: data.filename,
      timestamp: data.timestamp,
      url: data.url,
    };
  }

  public leaderBoardMapper(data: any): ILeaderBoard {
    return {
      tops: data.tops.map((x: any) => this.playerRunMapper(x)),
    };
  }

  public totdMapper(data: any): ITotd {
    return {
      campaignid: data.campaignid,
      leaderboarduid: data.leaderboarduid,
      map: this.mapMapper(data.map),
      monthday: data.monthday,
      weekday: data.weekday,
    };
  }

  public monthTotdMapper(data: any): IMonthTotd {
    return {
      days: data.days.map((x: any) => this.totdMapper(x)),
      lastday: data.lastday,
      month: data.month,
      monthcount: data.monthcount,
      monthoffset: data.monthoffset,
      year: data.year,
    };
  }

  public trophiesMapper(data: any): ITrophies {
    return {
      points: data.points,
      timestamp: data.timestamp,
      counts: data.counts,
      echelon: data.echelon,
      zone: this.zoneMapper(data.zone),
      zonepositions: data.zonepositions,
    };
  }

  public accountMapper(data: any): IAccount {
    return {
      accountid: data.accountid,
      displayname: data.displayname,
      timestamp: data.timestamp,
      clubtag: data.clubtag,
      clubtagtimestamp: data.clubtagtimestamp,
      trophies: data.trophies ? this.trophiesMapper(data.trophies) : null,
      matchmaking: data.matchmaking,
      meta: data.meta ? this.metaMapper(data.meta) : null,
    };
  }

  public matchmakingMapper(data: any): IMatchmaking {
    return {
      info: this.matchmakingInfoMapper(data.info),
      total: data.total,
    };
  }

  public matchmakingInfoMapper(data: any): IMatchmakingInfo {
    return {
      typename: data.typename,
      typeid: data.typeid,
      accountid: data.accountid,
      rank: data.rank,
      score: data.score,
      progression: data.progression,
      division: this.divisionMapper(data.division),
      division_next: this.divisionMapper(data.division_next),
    };
  }

  public divisionMapper(data: any): IDivision {
    return {
      position: data.position ? data.position : null,
      rule: data.rule ? data.rule : null,
      minpoints: data.minpoints ? data.minpoints : null,
      maxpoints: data.maxpoints ? data.maxpoints : null,
      minwins: data.minwins ? data.minwins : null,
      maxwins: data.maxwins ? data.maxwins : null,
    };
  }
}
