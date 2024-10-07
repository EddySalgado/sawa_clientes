import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTexrComponent } from './input-texr.component';

describe('InputTexrComponent', () => {
  let component: InputTexrComponent;
  let fixture: ComponentFixture<InputTexrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTexrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTexrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
