import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule, JsonPipe} from "@angular/common";
import {HeaderReusableComponent} from "../../shared/components/header-reusable/header-reusable.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DeleteEvent, TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import {
  VentanaEmergenteReusableComponent
} from "../../shared/components/ventana-emergente-reusable/ventana-emergente-reusable.component";
import {ButtomReusableComponent} from "../../shared/components/button-reusable/buttom-reusable.component";
import {InputReusableComponent} from "../../shared/components/input-reusable/input-reusable.component";
import {AlertReusableComponent} from "../../shared/components/alert-reusable/alert-reusable.component";
import { NotificacionReusableComponent } from "../../shared/components/notificacion_reusable/alert.component";
import {ClientesResponse} from "../../core/services/api/Clientes/ClientesResponse";
import {ClientesService} from "../../core/services/api/Clientes/ClientesService";
import {NotificationInterface, NotificationService} from "../../core/services/NotificacionService";
import {LocalStorageService} from "../../core/services/LocalStorageService";
import {STORAGE_KEYS} from "../../constants/Storage-keys";

@Component({
  selector: 'app-vista-clientes',
  standalone: true,
  imports: [CommonModule, TablaReusbaleComponent, JsonPipe,
    HeaderReusableComponent, VentanaEmergenteReusableComponent, ButtomReusableComponent,
    InputReusableComponent, ReactiveFormsModule, NotificacionReusableComponent, MatSnackBarModule, AlertReusableComponent,],
  templateUrl: './ruta1.component.html',
  styleUrl: './ruta1.component.css'
})

export class Ruta1Component implements OnInit {

  notification: NotificationInterface | null = null; //objeto de notificacion
  DialogVisible = false; // estado para el dialog resuable
  tituloPadre: string = "Clientes"; //titulo para el header component
  modalAbierto = false; //estado de la venta emergente
  formularioCliente: FormGroup; //formulario de la ventana emergente
  idCliente: string = "" //id del cliente selecionado de la tabla
  NombreClienteSeleccionado : string = "" //cliente que se eliminara para mostrar en el notificacion_reusable

  clientes: ClientesResponse[] = []; //model del cliente

  columns = [ // columnas de la tabla
    { key: 'id', label: 'Folio'},
    { key: 'nombre', label: 'Nombre' },
    { key: 'telefono', label: 'Teléfono' },
    { key: 'email', label: 'Email' },
    { key: 'id_usuario', label: 'ID Usuario' }
  ];

  constructor(private clientesService: ClientesService,
              private notificationService: NotificationService,
              private localStorageService: LocalStorageService,
             ) { //  private snackBar: MatSnackBar

    this.formularioCliente = new FormGroup({  //estructura del formulario de la ventana emergente
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl(''),
      correo: new FormControl('', [Validators.email]),
      direccion: new FormControl(''),
      descuento: new FormControl('')
    });

    //NOTIFIACION
    this.notificationService.notification$.subscribe((notification) => {
      this.notification = {
        type: notification.type,
        message: notification.message,
      };
      setTimeout(() => {
        this.notification = null;
      }, 3000);
    });


  }

  //al iniciar el componente
  ngOnInit() {
   this.obtenerClientes(); //llamar a los clientes de la base de datos
  }

  //get al servidor
  obtenerClientes() {

    const clienteId = this.localStorageService.getItem(STORAGE_KEYS.ID_USER) || "0"; //cambiar
    console.log(clienteId);
    this.clientesService.getClienteById(clienteId)
      .subscribe({
        next: (response) => {
          // console.log('Datos del cliente:', response);
          this.clientes = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener cliente:', error);
        }
      });
  }

  //NUEVOS CAMBIOS
  botonNuevoCliente() {
    //this.modalAbierto = true; //mostrar la ventana emergente
  }
  //NUEVOS CAMBIOS
 /* botonagregarClienteVentanaEmergente() {

    if (this.formularioCliente.valid) { //si el formulario esta validado

      const nuevoCliente: ClientesResponse = { //crear el usuario
        id: 0,
        nombre: this.formularioCliente.value.nombre,
        telefono: this.formularioCliente.value.telefono,
        email: this.formularioCliente.value.correo,
        id_usuario: this.localStorageService.getItem(STORAGE_KEYS.ID_USER) || "0", // cambiar en el futuro
      };

      console.log(nuevoCliente)

      this.enviarNuevoClienteApi(nuevoCliente) //enviar datos al servidor
      this.cerrarModal();
      this.formularioCliente.reset(); // Limpia el formulario después de guardar
    } else {
      this.notificationService.showError('Error codigo: 1521');
    }
  } */
  //NUEVOS CAMBIOS
/*  enviarNuevoClienteApi(nuevoCliente){

    this.clientesService.createCliente(nuevoCliente).subscribe({
      next: (response) => {
        console.log('Cliente creado correctamente:', response);
        this.notificationService.showSuccess('Cliente creado');
        this.obtenerClientes()
      },
      error: (error) => {
        console.error('Error al crear cliente:', error);
        this.notificationService.showError('No fue posible crear el cliente');
      }
    });
  } */
  //NEUVOS CAMBIOS
  cerrarModal() {
    this.modalAbierto = false;
  }
  //NUEVOS CAMBIOS
  handleDeleteClick(event: DeleteEvent) {
    this.idCliente = event.id
    this.NombreClienteSeleccionado = event.nombre
    this.mostrarDialog()
  }
  //ULTIMOS CAMBIO  confirm del dialog elimina el cliente
  onConfirm() {
    console.log('Confirmado');
    // Aquí puedes ejecutar tu metodo pérsonalixaso
    this.DialogVisible = false;

    this.clientesService.deleteCliente(this.idCliente).subscribe({
      next: (response) => {
        this.obtenerClientes()
        this.notificationService.showSuccess('Cliente eliminado');

      },
      error: (error) => {
        this.notificationService.showError('Error codigo: 1201');
      }
    });
  }
  //ultimos cambios
  //del aleert dialogo
  onCancel() {
    console.log('Cancelado');
    this.DialogVisible = false;
  }
  //ULTIMOS CAMBIOS
  //mostrar notificacion_reusable reusable
  mostrarDialog() {
    this.DialogVisible = true;
  }

}
