import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSymptomeComponent } from './view-symptome.component';

describe('ViewSymptomeComponent', () => {
  let component: ViewSymptomeComponent;
  let fixture: ComponentFixture<ViewSymptomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSymptomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSymptomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
