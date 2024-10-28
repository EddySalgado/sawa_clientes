import {Component, OnInit} from '@angular/core';
import {ClientesService} from "../../core/services/api/Clientes/GetClientesService";
import {AreaProductoService} from "../../core/services/api/area_producto/AreaProductoService";
import {ClientesResponse} from "../../core/services/api/Clientes/ClientesResponse";
import {AreaProductoResponse} from "../../core/services/api/area_producto/AreaProductoResponse";

@Component({
  selector: 'app-Areas_productos',
  standalone: true,
  imports: [],
  templateUrl: './ruta2.component.html',
  styleUrl: './ruta2.component.css'
})
export class Ruta2Component implements OnInit{
  areas: AreaProductoResponse[] = [];
  constructor(private areaProductoService: AreaProductoService) {}

  ngOnInit() {
    this.obtenerAreas();
  }

  obtenerAreas() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const clienteId = 22; // O el ID que necesites

    this.areaProductoService.getAreasById(clienteId)
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
