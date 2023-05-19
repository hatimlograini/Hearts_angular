import { TestBed } from '@angular/core/testing';

import { HeartCrudService } from './heart-crud.service';

describe('HeartCrudService', () => {
  let service: HeartCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeartCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
