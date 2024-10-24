import {Component, OnInit} from '@angular/core';
import { CardViewComponent } from '../../card-view/card-view.component';
import {ClientesService} from "../../core/services/api/Clientes/GetClientesService";


@Component({
  selector: 'app-ruta1',
  standalone: true,
  imports: [CardViewComponent],
  templateUrl: './ruta1.component.html',
  styleUrl: './ruta1.component.css'
})
export class Ruta1Component implements OnInit {
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
        },
        error: (error) => {
          console.error('Error al obtener cliente:', error);
        }
      });
  }

}
