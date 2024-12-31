import { Component } from '@angular/core'
import { JsonPipe } from "@angular/common";
import { CardViewComponent} from "../../shared/components/card-view-reusable/card-view.component";
import { TablaReusbaleComponent } from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import {  HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import { ComprasResponse } from "../../core/services/api/compras/ComprasResponse";
import { ComprasService } from "../../core/services/api/compras/ComprasService";

@Component({
  selector: 'app-vista-compra',
  standalone: true,
  imports: [JsonPipe, TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {
  //Titulo de la vista de compras.
  Titulo: string = "Compras";
  titulo_boton_nuevo_registro = "Nueva compra"

  compras: ComprasResponse[] = [];

  columnas = [
    {key: 'id', label: 'ID Compra'},
    {key: 'descripcion', label: 'Descripcion de la vista-compra'},
    {key: 'fecha', label: 'Fecha de vista-compra'},
    {key: 'monto', label: 'Monto'}
  ];

  constructor(private compraService: ComprasService) {}

  ngOnInit() {
    this.obtenerCompras();
  }

  obtenerCompras() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const ClienteId = 2; // O el ID que necesites

    this.compraService.getComprasById(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos de la vista-compra:', response);
          // Asignar directamente la respuesta al array.
          this.compras = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener la vista-compra:', error);
        }
      });
  }
}
