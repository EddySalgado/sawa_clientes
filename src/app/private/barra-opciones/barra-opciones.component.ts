import { Component, EventEmitter, Output } from '@angular/core';
import {RouterLink} from "@angular/router";

export interface OpcionSeleccionadaEvent {
  ruta: string;
}


@Component({
  selector: 'app-barra-opciones',
  standalone: true,
  templateUrl: './barra-opciones.component.html',
  styleUrl: './barra-opciones.component.css'
})
export class BarraOpcionesComponent {

  @Output() opcionSeleccionada = new EventEmitter<OpcionSeleccionadaEvent>();

  onOpcionClick(ruta: string) {
    this.opcionSeleccionada.emit({ruta});
  }

}















