import { Component, OnInit } from '@angular/core';
import { JsonPipe } from "@angular/common";
import { SucursalesResponse } from "../../core/services/api/sucursales/SucursalesResponse";
import { SucursalesService } from "../../core/services/api/sucursales/SucursalesService";
import { CardViewComponent } from "../../shared/components/card-view-reusable/card-view.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import { TablaReusbaleComponent } from "../../shared/components/tabla-reusbale/tabla-reusbale.component";

@Component({
  selector: 'app-vista-sucursal',
  standalone: true,
  imports: [JsonPipe, TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent],
  templateUrl: './vista-sucursal.component.html',
  styleUrl: './vista-sucursal.component.css'
})
export class VistaSucursalComponent {
  //Titulo de la vista
  Titulo: string = "Sucursales"
  titulo_boton_nuevo_regisro : string = "Nueva sucursal";

  sucursal: SucursalesResponse[] = [];

  //datoa que se muestan en la vista de sucursales.
  columnas = [
    {key: 'id', label: 'ID de Sucursal'},
    {key: 'nombre', label: 'Nombre de la sucursal'},
    {key: 'direccion', label: 'Direccion de la sucursal'},
    {key: 'telefono', label: 'Telefono'},
  ];

  constructor(private sucursalService: SucursalesService) {}

  ngOnInit() {
    this.obtenerSucursales();
  }

  obtenerSucursales() {

    const ClienteId = 22; //El ID que necesites.

    this.sucursalService.getSucursalesByID(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos de la sucursal:', response);
          this.sucursal = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener la sucursal:', error);
        }
      });
  }
}
