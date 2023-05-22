import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiagnosticComponent } from './view-diagnostic.component';

describe('ViewDiagnosticComponent', () => {
  let component: ViewDiagnosticComponent;
  let fixture: ComponentFixture<ViewDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDiagnosticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
