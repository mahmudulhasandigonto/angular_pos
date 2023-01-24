import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSaleInvoiceComponent } from './user-sale-invoice.component';

describe('UserSaleInvoiceComponent', () => {
  let component: UserSaleInvoiceComponent;
  let fixture: ComponentFixture<UserSaleInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSaleInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSaleInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
