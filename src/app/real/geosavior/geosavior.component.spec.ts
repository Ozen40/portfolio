import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeosaviorComponent } from './geosavior.component';

describe('GeosaviorComponent', () => {
  let component: GeosaviorComponent;
  let fixture: ComponentFixture<GeosaviorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeosaviorComponent]
    });
    fixture = TestBed.createComponent(GeosaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
