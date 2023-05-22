import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTraitementComponent } from './edit-traitement.component';

describe('EditTraitementComponent', () => {
  let component: EditTraitementComponent;
  let fixture: ComponentFixture<EditTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTraitementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
