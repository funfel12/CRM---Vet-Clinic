import { TestBed } from '@angular/core/testing';

import { DicvaccineService } from './dicvaccine.service';

describe('DicvaccineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DicvaccineService = TestBed.get(DicvaccineService);
    expect(service).toBeTruthy();
  });
});
