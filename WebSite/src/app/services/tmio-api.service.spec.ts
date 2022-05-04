import { TestBed } from '@angular/core/testing';

import { TmioApiService } from './tmio-api.service';

describe('TmioApiService', () => {
  let service: TmioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
