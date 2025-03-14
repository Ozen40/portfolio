import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandangleComponent } from './grandangle.component';

describe('GrandangleComponent', () => {
  let component: GrandangleComponent;
  let fixture: ComponentFixture<GrandangleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandangleComponent]
    });
    fixture = TestBed.createComponent(GrandangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
