import { Injectable } from '@angular/core';
import { ILeaderBoard, IMap, IMeta, IMonthTotd, IPlayer, IPlayerRun, IZone } from '../models/IModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiMapperService } from './api-mapper.service';


@Injectable({
  providedIn: 'root'
})
export class TmioApiService {

  public API_URL: string = 'https://trackmania.io/api/';

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Contact': 'Discord: Poseidon989#6913'
    }),
  };

  constructor(private http: HttpClient, private apiMapperService: ApiMapperService) { }

  public getMonthlyTotd(month: number = 0): Observable<IMonthTotd> {
    return this.http.get<IMap[]>(this.API_URL + 'totd/' + month, this.httpOptions).pipe(
      map(data => this.apiMapperService.monthTotdMapper(data))
    );
  }

  public getMap(id: string): Observable<IMap> {
    return this.http.get<IMap>(this.API_URL + 'map/' + id, this.httpOptions).pipe(
      map(data => this.apiMapperService.mapMapper(data))
    );
  }

  public getLeaderboard(mapperId: string, mapUid: string, length: number, offset: number = 0): Observable<ILeaderBoard> {
    return this.http.get<ILeaderBoard>(this.API_URL + 'leaderboard/' + mapperId + '/' + mapUid + '?offset=' + offset + '&length=' + length, this.httpOptions).pipe(
      map(data => this.apiMapperService.leaderBoardMapper(data))
    );
  }
}
