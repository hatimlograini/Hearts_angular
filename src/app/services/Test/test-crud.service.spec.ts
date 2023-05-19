import { TestBed } from '@angular/core/testing';

import { TestCrudService } from './test-crud.service';

describe('TestCrudService', () => {
  let service: TestCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
