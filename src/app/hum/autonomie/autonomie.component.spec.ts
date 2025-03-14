import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomieComponent } from './autonomie.component';

describe('AutonomieComponent', () => {
  let component: AutonomieComponent;
  let fixture: ComponentFixture<AutonomieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutonomieComponent]
    });
    fixture = TestBed.createComponent(AutonomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
