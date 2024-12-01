import { Component, OnInit } from '@angular/core';
import { JsonPipe } from "@angular/common";
import { ProvedoresResponse } from "../../core/services/api/provedores/ProvedoresResponse";
import { ProvedoresService } from "../../core/services/api/provedores/ProvedoresService";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import { TablaReusbaleComponent } from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import { CardViewComponent } from "../../shared/components/card-view-reusable/card-view.component";
import {VentasResponse} from "../../core/services/api/ventas/VentasResponse";
import {VentasService} from "../../core/services/api/ventas/VentasService";

@Component({
  selector: 'app-vista-proveedor',
  standalone: true,
  imports: [ JsonPipe, HeaderReusableComponent, TablaReusbaleComponent, CardViewComponent],
  templateUrl: './vista-proveedor.component.html',
  styleUrl: './vista-proveedor.component.css'
})
export class VistaProveedorComponent {
  //Titulo de la vista
  Titulo: string = "Proveedores"
  titulo_boton_nuevo_registro : string = "Nuevo provedor"

  proveedor: ProvedoresResponse[] = [];

  //datos que se muestan en la vista de proveedores.
  columnas = [
    {key: 'id', label: 'ID del Proveedor'},
    {key: 'nombre', label: 'Nombre del Proveedor'},
    {key: 'correo', label: 'Correo del Proveedor'},
    {key: 'telefono', label: 'Telefono del Proveedor'}
   ];

  constructor(private proveedoresService: ProvedoresService) {}

  ngOnInit() {
    this.obtenerProveedores();
  }

  obtenerProveedores() {

    const ClienteId = 22; //El ID que necesites.

    this.proveedoresService.getProvedoresByID(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del proveedor:', response);
          this.proveedor = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener el proveedor', error);
        }
      });
  }
}
