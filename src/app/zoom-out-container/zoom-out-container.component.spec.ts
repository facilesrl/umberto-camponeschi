import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomOutContainerComponent } from './zoom-out-container.component';

describe('ZoomOutContainerComponent', () => {
  let component: ZoomOutContainerComponent;
  let fixture: ComponentFixture<ZoomOutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomOutContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoomOutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
