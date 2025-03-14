import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenentComponent } from './openent.component';

describe('OpenentComponent', () => {
  let component: OpenentComponent;
  let fixture: ComponentFixture<OpenentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenentComponent]
    });
    fixture = TestBed.createComponent(OpenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
