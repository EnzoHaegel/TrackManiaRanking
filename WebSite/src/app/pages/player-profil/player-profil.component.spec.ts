import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfilComponent } from './player-profil.component';

describe('PlayerProfilComponent', () => {
  let component: PlayerProfilComponent;
  let fixture: ComponentFixture<PlayerProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
