import { Component, Input, OnInit } from '@angular/core';
import { IZone } from 'src/app/models/IModels';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-flag-zone',
  templateUrl: './flag-zone.component.html',
  styleUrls: ['./flag-zone.component.scss']
})
export class FlagZoneComponent implements OnInit {
  @Input() zone!: IZone | null;

  constructor(
    public zoneService: ZoneService
  ) { }

  ngOnInit(): void {
  }

}
