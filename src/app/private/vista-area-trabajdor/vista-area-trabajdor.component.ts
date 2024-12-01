import { Component, OnInit } from '@angular/core';
import { CardViewComponent } from '../../shared/components/card-view-reusable/card-view.component';
import {JsonPipe} from "@angular/common";
import { TablaReusbaleComponent } from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import { AreaTrabajadoresResponse } from "../../core/services/api/area_trabajadores/AreaTrabajadoresResponse";
import { AreaTrabajadoresService } from "../../core/services/api/area_trabajadores/AreaTrabajadoresService";


@Component({
  selector: 'app-vista-area-trabajdor',
  standalone: true,
  imports: [JsonPipe, TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent],
  templateUrl: './vista-area-trabajdor.component.html',
  styleUrl: './vista-area-trabajdor.component.css'
})
export class VistaAreaTrabajdorComponent {
  //titulo de la tabla area trabajador.
  Titulo: string = "Area de trabajadores";
  titulo_boton_nuevo_registro = "Nueva area"

  areaTrabajador: AreaTrabajadoresResponse[] = [];

  //datoa que se muestarn en la vista de area de trabajadores.
  columnas = [
    {key: 'id', label: 'ID Area'},
    {key: 'nombre', label: 'Nombre del area de trabajo'}
  ];

  constructor(private areaTrabajadorService: AreaTrabajadoresService) {}

  ngOnInit() {
    this.obtenerAreaTrabajador();
  }

  obtenerAreaTrabajador() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const ClienteId = 22; // O el ID que necesites

    this.areaTrabajadorService.getAreasTrabajadorById(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del area:', response);
          this.areaTrabajador = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener el area de trabajo:', error);
        }
      });
  }
}
