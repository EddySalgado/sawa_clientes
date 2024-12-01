import { Component, OnInit } from '@angular/core';
import { JsonPipe } from "@angular/common";
import { VentasResponse } from "../../core/services/api/ventas/VentasResponse";
import { VentasService } from "../../core/services/api/ventas/VentasService";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import { TablaReusbaleComponent } from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import { CardViewComponent } from "../../shared/components/card-view-reusable/card-view.component";

@Component({
  selector: 'app-vista-venta',
  standalone: true,
  imports: [ JsonPipe, HeaderReusableComponent, TablaReusbaleComponent, CardViewComponent ],
  templateUrl: './vista-venta.component.html',
  styleUrl: './vista-venta.component.css'
})
export class VistaVentaComponent {
  //Titulo de la vista
  Titulo: string = "Ventas"
  titulo_boton_nuevo_regisro : string = "Nueva venta";

  venta: VentasResponse[] = [];

  //datoa que se muestan en la vista de sucursales.
  columnas = [
    {key: 'id', label: 'ID de Venta'},
    {key: 'fecha', label: 'Fecha de venta'},
    {key: 'monto', label: 'Monto'},
    {key: 'id_sucursal', label: 'ID de la sucursal'},
    {key: 'id_trabajador', label: 'ID del trabajador'}
  ];

  constructor(private ventaService: VentasService) {}

  ngOnInit() {
    this.obtenerVentas();
  }

  obtenerVentas() {

    const ClienteId = 22; //El ID que necesites.

    this.ventaService.getVentasById(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos de la venta:', response);
          this.venta = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener la venta', error);
        }
      });
  }
}
