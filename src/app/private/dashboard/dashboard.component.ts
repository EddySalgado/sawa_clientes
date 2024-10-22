import { Component } from '@angular/core';
import {BarraOpcionesComponent, OpcionSeleccionadaEvent} from "../barra-opciones/barra-opciones.component";
import {RouterOutlet} from "@angular/router";
import {VistaReusableComponent} from "../vista-reusable/vista-reusable.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarraOpcionesComponent, RouterOutlet, VistaReusableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  rutaActual: string = '';

  onOpcionSeleccionada(event: OpcionSeleccionadaEvent) {
    this.rutaActual = event.ruta;
  }

}


