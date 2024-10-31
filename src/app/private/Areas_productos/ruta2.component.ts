import {Component, OnInit} from '@angular/core';
import {AreaProductoService} from "../../core/services/api/area_producto/AreaProductoService";
import {AreaProductoResponse} from "../../core/services/api/area_producto/AreaProductoResponse";
import { CardViewComponent } from '../../shared/components/card-view/card-view.component';
import {JsonPipe} from "@angular/common";
import { TablaReusbaleComponent } from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";


@Component({
  selector: 'app-Areas_productos',
  standalone: true,
  imports: [CardViewComponent, HeaderReusableComponent, TablaReusbaleComponent, JsonPipe],
  templateUrl: './ruta2.component.html',
  styleUrl: './ruta2.component.css'
})
export class Ruta2Component implements OnInit{
  title: string = "Area de productos"
  
  areas: AreaProductoResponse[] = [];
  columnas = [
    {key: 'id', label: 'ID Area'},
    {key: 'nombre', label: 'Nombre del Area'}
  ];

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
