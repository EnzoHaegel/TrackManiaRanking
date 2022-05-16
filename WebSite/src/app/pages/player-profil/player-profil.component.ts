import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccount, IZone } from 'src/app/models/IModels';
import { TmioApiService } from 'src/app/services/tmio-api.service';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-player-profil',
  templateUrl: './player-profil.component.html',
  styleUrls: ['./player-profil.component.scss']
})
export class PlayerProfilComponent implements OnInit {
  public accountId: string | undefined;

  public account!: IAccount;

  constructor(
    public zoneService: ZoneService,
    private tmioApiService: TmioApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.accountId = params['accountId'];
        if (this.accountId) {
          this.tmioApiService.getPlayer(this.accountId).subscribe({
            next: (account) => {
              this.account = account;
              console.log(account);
            },
            error: (err) => {
              console.log(err);
            }
          });
        }
      }
    );
  }
}
