import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSymptomeComponent } from './add-symptome.component';

describe('AddSymptomeComponent', () => {
  let component: AddSymptomeComponent;
  let fixture: ComponentFixture<AddSymptomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSymptomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSymptomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
