import { TestBed } from '@angular/core/testing';

import { ApiMapperService } from './api-mapper.service';

describe('ApiMapperService', () => {
  let service: ApiMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
