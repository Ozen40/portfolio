import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedcleanComponent } from './speedclean.component';

describe('SpeedcleanComponent', () => {
  let component: SpeedcleanComponent;
  let fixture: ComponentFixture<SpeedcleanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedcleanComponent]
    });
    fixture = TestBed.createComponent(SpeedcleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
