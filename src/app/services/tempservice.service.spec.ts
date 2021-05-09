import { TestBed } from '@angular/core/testing';

import { TempserviceService } from './tempservice.service';

describe('TempserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempserviceService = TestBed.get(TempserviceService);
    expect(service).toBeTruthy();
  });
});
