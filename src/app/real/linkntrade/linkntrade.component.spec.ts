import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkntradeComponent } from './linkntrade.component';

describe('LinkntradeComponent', () => {
  let component: LinkntradeComponent;
  let fixture: ComponentFixture<LinkntradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkntradeComponent]
    });
    fixture = TestBed.createComponent(LinkntradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
