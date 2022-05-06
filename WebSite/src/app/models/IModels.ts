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
    meta: IMeta | undefined;
}

export interface IZone {
    name: string;
    flag: string;
    parent: IZone | null;
}

export interface IMeta {
    twitch: string | undefined;
    youtube: string | undefined;
    twitter: string | undefined;
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

export interface IAccount {
    accountid: string;
    displayname: string;
    timestamp: string;
    clubtag: string;
    clubtagtimestamp: string;
    trophies: ITrophies;
    matchmaking: IMatchmaking[];
    meta: IMeta | undefined;
}

export interface ITrophies {
    points: number;
    timestamp: string;
    counts: number[];
    echelon: number;
    zone: IZone;
    zonepositions: number[];
}

export interface IMatchmaking {
    info: IMatchmakingInfo;
    total: number;
}

export interface IMatchmakingInfo {
    typename: string;
    typeid: number;
    accountid: string;
    rank: number;
    score: number;
    progression: number;
    division: IDivision;
    division_next: IDivision;
}

export interface IDivision {
    position: number;
    rule: string;
    minpoints: number;
    maxpoints: number;
    minwins: number;
    maxwins: number;
}
