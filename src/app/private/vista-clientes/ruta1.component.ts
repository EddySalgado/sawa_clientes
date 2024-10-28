import {Component, OnInit} from '@angular/core';
import { CardViewComponent } from '../../shared/components/card-view/card-view.component';
import {ClientesService} from "../../core/services/api/Clientes/GetClientesService";
import {ClientesResponse} from "../../core/services/api/Clientes/ClientesResponse";
import {TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import {JsonPipe} from "@angular/common";
import {HeaderReusableComponent} from "../../shared/components/header-reusable/header-reusable.component";


@Component({
  selector: 'app-vista-clientes',
  standalone: true,
  imports: [CardViewComponent, TablaReusbaleComponent, JsonPipe, HeaderReusableComponent],
  templateUrl: './ruta1.component.html',
  styleUrl: './ruta1.component.css'
})
export class Ruta1Component implements OnInit {
  tituloPadre: string = "Clientes";

  clientes: ClientesResponse[] = [];
  columns = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'telefono', label: 'Teléfono' },
    { key: 'email', label: 'Email' },
    { key: 'id_usuario', label: 'ID Usuario' }
  ];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const clienteId = 22; // O el ID que necesites

    this.clientesService.getClienteById(clienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del cliente:', response);
          this.clientes = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener cliente:', error);
        }
      });
  }



}

//

