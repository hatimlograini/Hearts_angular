import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiagnosticComponent } from './edit-diagnostic.component';

describe('EditDiagnosticComponent', () => {
  let component: EditDiagnosticComponent;
  let fixture: ComponentFixture<EditDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDiagnosticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
