import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSymptomeComponent } from './edit-symptome.component';

describe('EditSymptomeComponent', () => {
  let component: EditSymptomeComponent;
  let fixture: ComponentFixture<EditSymptomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSymptomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSymptomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
