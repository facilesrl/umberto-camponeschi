import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InEvidenzaBoxComponent } from './in-evidenza-box.component';

describe('InEvidenzaBoxComponent', () => {
  let component: InEvidenzaBoxComponent;
  let fixture: ComponentFixture<InEvidenzaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InEvidenzaBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InEvidenzaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
