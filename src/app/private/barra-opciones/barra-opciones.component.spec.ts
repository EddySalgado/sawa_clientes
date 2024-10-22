import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraOpcionesComponent } from './barra-opciones.component';

describe('BarraOpcionesComponent', () => {
  let component: BarraOpcionesComponent;
  let fixture: ComponentFixture<BarraOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraOpcionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
