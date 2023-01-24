import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSectionComponent } from './supplier-section.component';

describe('SupplierSectionComponent', () => {
  let component: SupplierSectionComponent;
  let fixture: ComponentFixture<SupplierSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
