export interface IMap {
    author: string;
    name: string;
    mapType: string;
    mapStyle: string;
    authorScore: number;
    goldScore: number;
    silverScore: number;
    bronzeScore: number;
    collectionName: string;
    filename: string;
    isPlayable: boolean;
    mapId: string;
    mapUid: string;
    submitter: string;
    timestamp: string;
    fileUrl: string;
    thumbnailUrl: string;
    authorplayer: IPlayer;
    submitterplayer: IPlayer;
    exchangeid: number;
}

export interface IPlayer {
    name: string;
    tag: string;
    id: string;
    zone: IZone | null;
    meta: IMeta;
}

export interface IZone {
    name: string;
    flag: string;
    parent: IZone | null;
}

export interface IMeta {
    twitch: string;
    youtube: string;
    twitter: string;
}

export interface IPlayerRun {
    player: IPlayer;
    position: number;
    time: number;
    filename: string;
    timestamp: string;
    url: string;
}

export interface ILeaderBoard {
    tops: IPlayerRun[];
}

export interface ITotd {
    campaignid: string;
    leaderboarduid: string;
    map: IMap;
    monthday: number;
    weekday: number;
}

export interface IMonthTotd {
    days: ITotd[];
    lastday: number;
    month: number;
    monthcount: number;
    monthoffset: number;
    year: number;
}
