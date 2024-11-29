import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselScrollComponent } from './carousel-scroll.component';

describe('CarouselScrollComponent', () => {
  let component: CarouselScrollComponent;
  let fixture: ComponentFixture<CarouselScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
