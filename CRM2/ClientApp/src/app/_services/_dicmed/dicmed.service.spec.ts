import { TestBed } from '@angular/core/testing';

import { DicmedService } from './dicmed.service';

describe('DicmedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DicmedService = TestBed.get(DicmedService);
    expect(service).toBeTruthy();
  });
});
