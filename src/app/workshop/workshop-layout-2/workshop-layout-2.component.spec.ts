import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopLayout2Component } from './workshop-layout-2.component';

describe('WorkshopLayout2Component', () => {
  let component: WorkshopLayout2Component;
  let fixture: ComponentFixture<WorkshopLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopLayout2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
