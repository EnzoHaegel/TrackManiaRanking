import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInfosComponent } from './map-infos.component';

describe('MapInfosComponent', () => {
  let component: MapInfosComponent;
  let fixture: ComponentFixture<MapInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
