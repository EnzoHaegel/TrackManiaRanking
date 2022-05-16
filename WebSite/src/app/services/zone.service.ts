import { Injectable } from '@angular/core';
import { IZone } from '../models/IModels';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor() { }

  public getFlagUrl(zone: IZone | null): string {
    if (zone && zone.parent && (zone.flag.toUpperCase() !== zone.flag || zone.flag.length != 3)) {
      return this.getFlagUrl(zone.parent);
    }
    let URL = "https://trackmania.io/img/flags/"
    return URL + (zone?.flag ? zone.flag : 'WOR') + ".jpg";
  }

  public getZoneName(zone: IZone | null): string {
    return zone ? zone.name + (zone.parent ? ' / ' + this.getZoneName(zone.parent) : '' ) : 'Unknown';
  }

  public getZoneN(zone: IZone | null, num: number): IZone | null{
    if (num == 0)
      return zone;
    if (zone && zone.parent) {
      return this.getZoneN(zone.parent, num - 1);
    }
    return null;
  }
}
