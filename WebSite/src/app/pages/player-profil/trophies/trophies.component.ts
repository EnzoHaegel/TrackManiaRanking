import { Component, Input, OnInit } from '@angular/core';
import { IAccount, IZone } from 'src/app/models/IModels';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {
  @Input() account!: IAccount;

  constructor(
    public zoneService: ZoneService
  ) { }

  ngOnInit(): void {
  }
}
