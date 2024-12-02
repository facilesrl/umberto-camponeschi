import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCategoryLayout2Component } from './portfolio-category-layout-2.component';

describe('PortfolioCategoryLayout2Component', () => {
  let component: PortfolioCategoryLayout2Component;
  let fixture: ComponentFixture<PortfolioCategoryLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCategoryLayout2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioCategoryLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
