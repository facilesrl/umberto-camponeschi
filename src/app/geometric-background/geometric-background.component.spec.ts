import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometricBackgroundComponent } from './geometric-background.component';

describe('GeometricBackgroundComponent', () => {
  let component: GeometricBackgroundComponent;
  let fixture: ComponentFixture<GeometricBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeometricBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeometricBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
