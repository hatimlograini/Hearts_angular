import { TestBed } from '@angular/core/testing';

import { TempsCrudService } from './temps-crud.service';

describe('TempsCrudService', () => {
  let service: TempsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
