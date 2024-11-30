import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPointerComponent } from './custom-pointer.component';

describe('CustomPointerComponent', () => {
  let component: CustomPointerComponent;
  let fixture: ComponentFixture<CustomPointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPointerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
