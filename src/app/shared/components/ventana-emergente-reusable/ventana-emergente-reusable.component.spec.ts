import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaEmergenteReusableComponent } from './ventana-emergente-reusable.component';

describe('VentanaEmergenteReusableComponent', () => {
  let component: VentanaEmergenteReusableComponent;
  let fixture: ComponentFixture<VentanaEmergenteReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaEmergenteReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentanaEmergenteReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
