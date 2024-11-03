import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteZComponent } from './componente-z.component';

describe('ComponenteZComponent', () => {
  let component: ComponenteZComponent;
  let fixture: ComponentFixture<ComponenteZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteZComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
