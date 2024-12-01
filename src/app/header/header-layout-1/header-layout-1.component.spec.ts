import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayout1Component } from './header-layout-1.component';

describe('HeaderLayout1Component', () => {
  let component: HeaderLayout1Component;
  let fixture: ComponentFixture<HeaderLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLayout1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
