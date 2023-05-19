import { TestBed } from '@angular/core/testing';

import { PatientCrudService } from './patient-crud.service';

describe('PatientCrudService', () => {
  let service: PatientCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
