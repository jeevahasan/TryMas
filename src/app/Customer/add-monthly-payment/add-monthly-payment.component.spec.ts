import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyPaymentComponent } from './add-monthly-payment.component';

describe('AddMonthlyPaymentComponent', () => {
  let component: AddMonthlyPaymentComponent;
  let fixture: ComponentFixture<AddMonthlyPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonthlyPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonthlyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
