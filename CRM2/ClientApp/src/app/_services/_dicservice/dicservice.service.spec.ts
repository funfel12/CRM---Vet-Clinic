import { TestBed } from '@angular/core/testing';

import { DicserviceService } from './dicservice.service';

describe('DicserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DicserviceService = TestBed.get(DicserviceService);
    expect(service).toBeTruthy();
  });
});
