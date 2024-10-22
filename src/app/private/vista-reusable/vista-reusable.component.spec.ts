import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaReusableComponent } from './vista-reusable.component';

describe('VistaReusableComponent', () => {
  let component: VistaReusableComponent;
  let fixture: ComponentFixture<VistaReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
