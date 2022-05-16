import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagZoneComponent } from './flag-zone.component';

describe('FlagZoneComponent', () => {
  let component: FlagZoneComponent;
  let fixture: ComponentFixture<FlagZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
