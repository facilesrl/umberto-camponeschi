import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopLayout1Component } from './workshop-layout-1.component';

describe('WorkshopLayout1Component', () => {
  let component: WorkshopLayout1Component;
  let fixture: ComponentFixture<WorkshopLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopLayout1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
