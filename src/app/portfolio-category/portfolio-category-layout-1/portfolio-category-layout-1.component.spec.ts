import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCategoryLayout1Component } from './portfolio-category-layout-1.component';

describe('PortfolioCategoryLayout1Component', () => {
  let component: PortfolioCategoryLayout1Component;
  let fixture: ComponentFixture<PortfolioCategoryLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCategoryLayout1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioCategoryLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
