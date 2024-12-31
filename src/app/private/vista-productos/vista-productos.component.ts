import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule, JsonPipe} from "@angular/common";
import { CardViewComponent } from '../../shared/components/card-view-reusable/card-view.component';
import {ProductoService} from "../../core/services/api/productos/ProductoService";
import {ProductoResponse} from "../../core/services/api/productos/ProductoResponse";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import {AlertReusableComponent} from "../../shared/components/alert-reusable/alert-reusable.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DeleteEvent, TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import {
  VentanaEmergenteReusableComponent
} from "../../shared/components/ventana-emergente-reusable/ventana-emergente-reusable.component";
import {ButtomReusableComponent} from "../../shared/components/button-reusable/buttom-reusable.component";
import {InputReusableComponent} from "../../shared/components/input-reusable/input-reusable.component";
import { NotificacionReusableComponent } from "../../shared/components/notificacion_reusable/alert.component";
import {NotificationInterface, NotificationService} from "../../core/services/NotificacionService";
import {ComboBoxReusableComponent} from "../../shared/components/combo-box-reusable/combo-box-reusable.component";


@Component({
  selector: 'app-vista-productos',
  standalone: true,
  imports: [CommonModule, TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent, JsonPipe,
    AlertReusableComponent, VentanaEmergenteReusableComponent, ButtomReusableComponent, InputReusableComponent,
    ReactiveFormsModule, NotificacionReusableComponent, MatSnackBarModule, ComboBoxReusableComponent],
  templateUrl: './vista-productos.component.html',
  styleUrl: './vista-productos.component.css'
})
export class VistaProductosComponent implements OnInit{

  notification: NotificationInterface | null = null; //objeto de notificacion

  DialogVisible = false; // estado para el dialog resuable

  modalAbierto = false; //estado de la venta emergente
  formularioProductos: FormGroup; //formulario de la ventana emergente

  NombreClienteSeleccionado : string = "" //cliente que se eliminara para mostrar en el notificacion_reusable

//titulo de la tabla productos.
  Titulo: string = "Productos";
  idProducto: string = "";
  titulo_boton_nuevo_registro = "Nuevo producto";

  productos: ProductoResponse[] = [];
  columnas = [
    {key: 'id', label: 'ID Producto'},
    {key: 'cantidad', label: 'Cantidad'},
    {key: 'nombre', label: 'Nombre del producto'},
    {key: 'precio', label: 'Precio'}
  ];


  constructor(private ProductosService: ProductoService, private notificationService: NotificationService) {

    this.formularioProductos = new FormGroup({  //estructura del formulario de la ventana emergente
      nombre: new FormControl('', [Validators.required]),
      precioCompra: new FormControl(''),
      precioVenta: new FormControl(''),
      ventaMayoreo: new FormControl(''),
      cantidad: new FormControl(''),
      descuento: new FormControl('')
    });

    //Notificación.
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

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const ClienteId = 2; // O el ID que necesites

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

  botonNuevoProducto() {
    //this.modalAbierto = true; //mostrar la ventana emergente
  }

 /* botonagregarProductoVentanaEmergente() {

    if (this.formularioProductos.valid) { //si el formulario esta validado

       const nuevoCliente: ProductoResponse = { //crear el usuario
        id: 0,
        nombre: this.formularioProductos.value.nombre,
        precioCompra: this.formularioProductos.value.precioCompra,
        precioVenta: this.formularioProductos.value.precioVenta,
        id_usuario: 22, // cambiar en el futuro
      };

      console.log(nuevoCliente)

      this.enviarNuevoClienteApi(nuevoCliente) //enviar datos al servidor
      this.cerrarModal();
      this.formularioCliente.reset();  // Limpia el formulario después de guardar
    } else {
      this.notificationService.showError('Error codigo: 1521');
    }
  } */

  //enviar datos al servidor
/*  enviarNuevoClienteApi(nuevoCliente){

    this.ProductosService.createProductos(nuevoCliente).subscribe({
      next: (response) => {
        console.log('Cliente creado correctamente:', response);
        this.notificationService.showSuccess('Cliente creado');
        this.obtenerProductos()
      },
      error: (error) => {
        console.error('Error al crear cliente:', error);
        this.notificationService.showError('No fue posible crear el cliente');
      }
    });
  } */

  cerrarModal() {
    this.modalAbierto = false;
  }

  handleDeleteClick(event: DeleteEvent) {
    this.idProducto = event.id
    this.NombreClienteSeleccionado = event.nombre
    this.mostrarDialog()
  }

  //del dialog
  onConfirm() {
    console.log('Confirmado');
    // Aquí puedes ejecutar tu metodo pérsonalixaso
    this.DialogVisible = false;
    this.notificationService.showSuccess('Producto eliminado');

    this.ProductosService.deleteProducto(this.idProducto).subscribe({
      next: (response) => {
        console.log('Cliente eliminado correctamente:', response);
        this.obtenerProductos()
        this.notificationService.showSuccess('Cliente eliminado');

      },
      error: (error) => {
        console.error('Error al crear cliente:', error);
        this.notificationService.showError('Error codigo: 1201');
      }
    });
  }

  //del aleert dialogo
  onCancel() {
    console.log('Cancelado');
    this.DialogVisible = false;
  }

  //mostrar notificacion_reusable reusable
  mostrarDialog() {
    this.DialogVisible = true;
  }


}
