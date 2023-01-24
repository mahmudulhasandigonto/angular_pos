import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleSectionComponent } from './sale-section.component';

describe('SaleSectionComponent', () => {
  let component: SaleSectionComponent;
  let fixture: ComponentFixture<SaleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
