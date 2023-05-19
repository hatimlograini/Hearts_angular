import { TestBed } from '@angular/core/testing';

import { DiagnosticCrudService } from './diagnostic-crud.service';

describe('DiagnosticCrudService', () => {
  let service: DiagnosticCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosticCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
