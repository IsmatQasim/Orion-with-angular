import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrsComponent } from './pnrs.component';

describe('PnrsComponent', () => {
  let component: PnrsComponent;
  let fixture: ComponentFixture<PnrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PnrsComponent]
    });
    fixture = TestBed.createComponent(PnrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
