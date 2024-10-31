import {Component, OnInit} from '@angular/core';
import { CardViewComponent } from '../../shared/components/card-view/card-view.component';
import {ProductoService} from "../../core/services/api/productos/ProductoService";
import {ProductoResponse} from "../../core/services/api/productos/ProductoResponse";
import {JsonPipe} from "@angular/common";
import { TablaReusbaleComponent } from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";




@Component({
  selector: 'app-vista-productos',
  standalone: true,
  imports: [TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent, JsonPipe],
  templateUrl: './vista-productos.component.html',
  styleUrl: './vista-productos.component.css'
})
export class VistaProductosComponent implements OnInit{
//titulo de la tabla productos.
  Titulo: string = "Productos";

  productos: ProductoResponse[] = [];
  columnas = [
    {key: 'id', label: 'ID Producto'},
    {key: 'cantidad', label: 'Cantidad'},
    {key: 'nombre', label: 'Nombre del producto'},
    {key: 'precio', label: 'Precio'}
  ];

  constructor(private ProductosService: ProductoService) {}

  ngOnInit() {
    this.obtenerProductos();  
  }

  obtenerProductos() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const ClienteId = 22; // O el ID que necesites

    this.ProductosService.getProductosById(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del producto:', response);
        // Asignar directamente la respuesta al array `productos`
        this.productos = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener producto:', error);
        }
      });
  }
}
