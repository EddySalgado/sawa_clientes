import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import { PermisosService } from '../../core/services/api/permisos.service';
import { MenuOption } from '../../models/menu.interface';
import {CommonModule} from "@angular/common";


export interface OpcionSeleccionadaEvent {
  ruta: string;
}


@Component({
  selector: 'app-barra-opciones',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './barra-opciones.component.html',
  styleUrl: './barra-opciones.component.css'
})
export class BarraOpcionesComponent implements OnInit {

  @Output() opcionSeleccionada = new EventEmitter<OpcionSeleccionadaEvent>();
  //nuevo
  opcionesMenu: MenuOption[] = [];
  //nmuev0
  constructor(private permisosService: PermisosService) {}


  onOpcionClick(ruta: string) {
    this.opcionSeleccionada.emit({ruta});
  }

  //nuev0
  ngOnInit() {
    this.permisosService.cargarPermisos(32).subscribe(
      permisos => {
        if (Array.isArray(permisos)) {
          this.opcionesMenu = permisos;
          console.log(this.opcionesMenu);
        }
        console.log(permisos);
      }
    );
  }



}
