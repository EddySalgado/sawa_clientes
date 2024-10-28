import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomReusableComponent } from './buttom-reusable.component';

describe('ButtomReusableComponent', () => {
  let component: ButtomReusableComponent;
  let fixture: ComponentFixture<ButtomReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtomReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtomReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
