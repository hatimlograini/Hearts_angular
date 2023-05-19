import { TestBed } from '@angular/core/testing';

import { SymptomeCrudService } from './symptome-crud.service';

describe('SymptomeCrudService', () => {
  let service: SymptomeCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymptomeCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
