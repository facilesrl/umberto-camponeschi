import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameRotateComponent } from './name-rotate.component';

describe('NameRotateComponent', () => {
  let component: NameRotateComponent;
  let fixture: ComponentFixture<NameRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameRotateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
