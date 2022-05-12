import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccount, IZone } from 'src/app/models/IModels';
import { TmioApiService } from 'src/app/services/tmio-api.service';

@Component({
  selector: 'app-player-profil',
  templateUrl: './player-profil.component.html',
  styleUrls: ['./player-profil.component.scss']
})
export class PlayerProfilComponent implements OnInit {
  public accountId: string | undefined;

  public account!: IAccount;

  constructor(private tmioApiService: TmioApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.accountId = params['accountId'];
        if (this.accountId) {
          this.tmioApiService.getPlayer(this.accountId).subscribe({
            next: (account) => {
              this.account = account;
            },
            error: (err) => {
              console.log(err);
            }
          });
        }
      }
    );
  }

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
}
