import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCeilingComponent } from './sales-ceiling.component';

describe('SalesCeilingComponent', () => {
  let component: SalesCeilingComponent;
  let fixture: ComponentFixture<SalesCeilingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesCeilingComponent]
    });
    fixture = TestBed.createComponent(SalesCeilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
