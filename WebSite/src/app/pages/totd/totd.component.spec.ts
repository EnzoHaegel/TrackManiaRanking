import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotdComponent } from './totd.component';

describe('TotdComponent', () => {
  let component: TotdComponent;
  let fixture: ComponentFixture<TotdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
