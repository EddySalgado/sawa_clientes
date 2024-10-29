import {Component, OnInit} from '@angular/core';
import {AreaProductoResponse} from "../../core/services/api/area_producto/AreaProductoResponse";
import {AreaProductoService} from "../../core/services/api/area_producto/AreaProductoService";

import {ProductoService} from "../../core/services/api/productos/ProductoService";
import {ProductoResponse} from "../../core/services/api/productos/ProductoResponse";




@Component({
  selector: 'app-vista-productos',
  standalone: true,
  imports: [],
  templateUrl: './vista-productos.component.html',
  styleUrl: './vista-productos.component.css'
})
export class VistaProductosComponent implements OnInit{

  areas: ProductoResponse[] = [];
  constructor(private ProductosService: ProductoService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const clienteId = 22; // O el ID que necesites

    this.ProductosService.getProductosById(clienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del cliente:', response);
          this.areas = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener cliente:', error);
        }
      });
  }
}
