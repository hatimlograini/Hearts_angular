import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTraitementComponent } from './view-traitement.component';

describe('ViewTraitementComponent', () => {
  let component: ViewTraitementComponent;
  let fixture: ComponentFixture<ViewTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTraitementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
