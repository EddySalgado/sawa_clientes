import {Component, OnInit} from '@angular/core';
import { CardViewComponent } from '../../shared/components/card-view/card-view.component';
import {ClientesService} from "../../core/services/api/Clientes/GetClientesService";
import {ClientesResponse} from "../../core/services/api/Clientes/ClientesResponse";
import {TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import {JsonPipe} from "@angular/common";
import {HeaderReusableComponent} from "../../shared/components/header-reusable/header-reusable.component";
import {
  VentanaEmergenteReusableComponent
} from "../../shared/components/ventana-emergente-reusable/ventana-emergente-reusable.component";
import {ButtomReusableComponent} from "../../shared/components/button-reusable/buttom-reusable.component";
import {InputReusableComponent} from "../../shared/components/input-reusable/input-reusable.component";
import {ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-vista-clientes',
  standalone: true,
  imports: [CardViewComponent, TablaReusbaleComponent, JsonPipe, HeaderReusableComponent, VentanaEmergenteReusableComponent, ButtomReusableComponent, InputReusableComponent, ReactiveFormsModule],
  templateUrl: './ruta1.component.html',
  styleUrl: './ruta1.component.css'
})
export class Ruta1Component implements OnInit {
  tituloPadre: string = "Clientes";
  //de la ventana
  modalAbierto = false;

  clientes: ClientesResponse[] = [];
  columns = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'telefono', label: 'Teléfono' },
    { key: 'email', label: 'Email' },
    { key: 'id_usuario', label: 'ID Usuario' }
  ];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
   // this.obtenerClientes();
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


  botonNuevoCliente() {
    this.modalAbierto = true;
  }





  cerrarModal() {
    this.modalAbierto = false;
  }


}

//

