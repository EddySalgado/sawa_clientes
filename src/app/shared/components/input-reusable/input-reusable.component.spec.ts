import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReusableComponent } from './input-reusable.component';

describe('InputReusableComponent', () => {
  let component: InputReusableComponent;
  let fixture: ComponentFixture<InputReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
