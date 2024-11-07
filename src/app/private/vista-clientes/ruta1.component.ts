import {Component, OnInit, ViewChild} from '@angular/core';
import { CardViewComponent } from '../../shared/components/card-view/card-view.component';
import {ClientesService} from "../../core/services/api/Clientes/GetClientesService";
import {ClientesResponse} from "../../core/services/api/Clientes/ClientesResponse";
import {TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import {CommonModule, JsonPipe} from "@angular/common";
import {HeaderReusableComponent} from "../../shared/components/header-reusable/header-reusable.component";
import {
  VentanaEmergenteReusableComponent
} from "../../shared/components/ventana-emergente-reusable/ventana-emergente-reusable.component";
import {ButtomReusableComponent} from "../../shared/components/button-reusable/buttom-reusable.component";
import {InputReusableComponent} from "../../shared/components/input-reusable/input-reusable.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import {AlertComponent} from "../../shared/components/alert/alert.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-vista-clientes',
  standalone: true,
  imports: [CommonModule,CardViewComponent, TablaReusbaleComponent, JsonPipe,
    HeaderReusableComponent, VentanaEmergenteReusableComponent, ButtomReusableComponent,
    InputReusableComponent, ReactiveFormsModule, AlertComponent, MatSnackBarModule,],
  templateUrl: './ruta1.component.html',
  styleUrl: './ruta1.component.css'
})
export class Ruta1Component implements OnInit {

  tituloPadre: string = "Clientes";
  modalAbierto = false; //estado de la venta emergente
  mostrarAlert = false; //estado del alert
  tipoAlert: 'success' | 'error' | 'warning' | 'info' = 'success'; //tipo de alert
  mensajeAlert = ''; //mensaje a mostrar en el alert
  formularioCliente: FormGroup; //formulario de la ventana emergente

  clientes: ClientesResponse[] = []; //model del cliente

  columns = [ // columnas de la tabla
    { key: 'nombre', label: 'Nombre' },
    { key: 'telefono', label: 'Teléfono' },
    { key: 'email', label: 'Email' },
    { key: 'id_usuario', label: 'ID Usuario' }
  ];

  constructor(private clientesService: ClientesService) { //  private snackBar: MatSnackBar

    this.formularioCliente = new FormGroup({  //estructura del formulario de la ventana emergente
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl(''),
      correo: new FormControl('', [Validators.email]),
      direccion: new FormControl(''),
      descuento: new FormControl('')
    });

  }


  //al iniciar el componente
  ngOnInit() {
   this.obtenerClientes(); //llamar a los clientes de la base de datos
  }

  //get al servidor
  obtenerClientes() {

    const clienteId = 22; //canbiar
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
    this.modalAbierto = true; //mostrar la ventana emergente
  }

  botonagregarClienteVentanaEmergente() {

    if (this.formularioCliente.valid) { //si el formulario esta validado

      const nuevoCliente: ClientesResponse = { //crear el usuario
        id: 0,
        nombre: this.formularioCliente.value.nombre,
        telefono: this.formularioCliente.value.telefono,
        email: this.formularioCliente.value.correo,
        id_usuario: 22, // cambiar en el futuro
      };

      console.log(nuevoCliente)

      this.enviarNuevoClienteApi(nuevoCliente) //enviar datos al servidor
      this.cerrarModal();
      this.formularioCliente.reset(); // Limpia el formulario después de guardar
    } else {
      this.mostrarMensajeError();
    }



  }

  //enviar datos al servidor
  enviarNuevoClienteApi(nuevoCliente){


    this.clientesService.createCliente(nuevoCliente).subscribe({
      next: (response) => {
        console.log('Cliente creado correctamente:', response);
        this.mostrarMensajeExito();
      },
      error: (error) => {
        console.error('Error al crear cliente:', error);
        this.mostrarMensajeError()
      }
    });
  }




  mostrarMensajeExito() {
    this.tipoAlert = 'success';
    this.mensajeAlert = '¡Cliente guardado exitosamente!';
    this.mostrarAlert = true;
    setTimeout(() => {
      this.mostrarAlert = false;
    }, 3000);
  }

  mostrarMensajeError() {
    this.tipoAlert = 'error';
    this.mensajeAlert = '¡Ocurrió un error!';
    this.mostrarAlert = true;
    setTimeout(() => {
      this.mostrarAlert = false;
    }, 3000);
  }

 /* mostrarMensajeExito() {
    this.snackBar.open('¡Cliente guardado exitosamente!', 'Cerrar', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']

    });
  }*/


  cerrarModal() {
    this.modalAbierto = false;
  }


}

//

