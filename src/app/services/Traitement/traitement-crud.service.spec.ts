import { TestBed } from '@angular/core/testing';

import { TraitementCrudService } from './traitement-crud.service';

describe('TraitementCrudService', () => {
  let service: TraitementCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraitementCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
