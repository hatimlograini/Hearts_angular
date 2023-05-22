import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTraitementComponent } from './add-traitement.component';

describe('AddTraitementComponent', () => {
  let component: AddTraitementComponent;
  let fixture: ComponentFixture<AddTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTraitementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
