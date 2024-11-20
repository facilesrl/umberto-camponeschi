import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollManagerComponent } from './scroll-manager.component';

describe('ScrollManagerComponent', () => {
  let component: ScrollManagerComponent;
  let fixture: ComponentFixture<ScrollManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
