import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertReusableComponent } from './alert-reusable.component';

describe('AlertReusableComponent', () => {
  let component: AlertReusableComponent;
  let fixture: ComponentFixture<AlertReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
