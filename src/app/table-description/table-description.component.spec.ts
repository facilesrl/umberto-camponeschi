import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDescriptionComponent } from './table-description.component';

describe('TableDescriptionComponent', () => {
  let component: TableDescriptionComponent;
  let fixture: ComponentFixture<TableDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
