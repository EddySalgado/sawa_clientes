import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVentaComponent } from './vista-venta.component';

describe('VistaVentaComponent', () => {
  let component: VistaVentaComponent;
  let fixture: ComponentFixture<VistaVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaVentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
