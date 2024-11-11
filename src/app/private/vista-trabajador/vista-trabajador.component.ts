import { Component, OnInit } from '@angular/core';
import { JsonPipe } from "@angular/common";
import { TrabajadoresService } from "../../core/services/api/trabajadores/TrabajadoresService";
import { TrabajadoresResponse } from "../../core/services/api/trabajadores/TrabajadoresResponse";
import { CardViewComponent } from "../../shared/components/card-view-reusable/card-view.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import { TablaReusbaleComponent } from "../../shared/components/tabla-reusbale/tabla-reusbale.component";

@Component({
  selector: 'app-vista-trabajador',
  standalone: true,
  imports: [JsonPipe, TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent],
  templateUrl: './vista-trabajador.component.html',
  styleUrl: './vista-trabajador.component.css'
})
export class VistaTrabajadorComponent {
  //Titulo de la vista
  Titulo: string = "Trabajadores"

  trabajador: TrabajadoresResponse[] = [];

  //datoa que se muestan en la vista de trabajadores.
  columnas = [
    {key: 'id', label: 'ID del trabajador'},
    {key: 'nombre', label: 'Nombre del trabajador'},
    {key: 'email', label: 'Correo electronico'},
    {key: 'telefono', label: 'Telefono'},
    {key: 'sueldo', label: 'Sueldo'},
    {key: 'id_area_trabajador', label: 'ID del Area del Trbajador'}
  ];

  constructor(private trabajadorService: TrabajadoresService) {}

  ngOnInit() {
    this.obtenerTrabajadores();
  }

  obtenerTrabajadores() {

    const ClienteId = 22; //El ID que necesites.

    this.trabajadorService.getTrabajadoresById(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del trabajador:', response);
          this.trabajador = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener los trabajadres:', error);
        }
      });
  }
}
