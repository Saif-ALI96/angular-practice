import { TestBed } from '@angular/core/testing';

import { LesProduitsService } from './les-produits.service';

describe('LesProduitsService', () => {
  let service: LesProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LesProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
