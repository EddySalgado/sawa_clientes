import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBoxReusableComponent } from './combo-box-reusable.component';

describe('ComboBoxReusableComponent', () => {
  let component: ComboBoxReusableComponent;
  let fixture: ComponentFixture<ComboBoxReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboBoxReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboBoxReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
