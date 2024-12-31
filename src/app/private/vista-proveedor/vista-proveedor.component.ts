import { Component, OnInit } from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import { ProvedoresResponse } from "../../core/services/api/provedores/ProvedoresResponse";
import { ProvedoresService } from "../../core/services/api/provedores/ProvedoresService";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import {DeleteEvent, TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import { CardViewComponent } from "../../shared/components/card-view-reusable/card-view.component";
import {VentasResponse} from "../../core/services/api/ventas/VentasResponse";
import {VentasService} from "../../core/services/api/ventas/VentasService";
import {AlertReusableComponent} from "../../shared/components/alert-reusable/alert-reusable.component";
import {NotificacionReusableComponent} from "../../shared/components/notificacion_reusable/alert.component";
import {NotificationInterface, NotificationService} from "../../core/services/NotificacionService";

@Component({
  selector: 'app-vista-proveedor',
  standalone: true,
  imports: [JsonPipe, HeaderReusableComponent, TablaReusbaleComponent, CardViewComponent, AlertReusableComponent, NgIf, NotificacionReusableComponent],
  templateUrl: './vista-proveedor.component.html',
  styleUrl: './vista-proveedor.component.css'
})
export class VistaProveedorComponent implements OnInit {
  //Titulo de la vista
  Titulo: string = "Proveedores"
  titulo_boton_nuevo_registro : string = "Nuevo provedor"

  idProvedor: string = "";

  notification: NotificationInterface | null = null; //objeto de notificacion

  DialogVisible = false; // estado para el dialog resuable

  modalAbierto = false;

  NombreProvedorSeleccionado : string = "" //cliente que se eliminara para mostrar en el notificacion_reusable

  proveedor: ProvedoresResponse[] = [];

  //datos que se muestan en la vista de proveedores.
  columnas = [
    {key: 'id', label: 'ID del Proveedor'},
    {key: 'nombre', label: 'Nombre del Proveedor'},
    {key: 'correo', label: 'Correo del Proveedor'},
    {key: 'telefono', label: 'Telefono del Proveedor'}
   ];

  constructor(private proveedoresService: ProvedoresService, private notificationService: NotificationService ) {
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
    this.obtenerProveedores();
  }

  obtenerProveedores() {

    const ClienteId = 2; //El ID que necesites.

    this.proveedoresService.getProvedoresByID(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del proveedor:', response);
          this.proveedor = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener el proveedor', error);
        }
      });
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  handleDeleteClick(event: DeleteEvent) {
    this.idProvedor = event.id
    this.NombreProvedorSeleccionado = event.nombre
    this.mostrarDialog()
  }

  //del dialog
  onConfirm() {
    console.log('Confirmado');
    // Aquí puedes ejecutar tu metodo pérsonalixaso
    this.DialogVisible = false;
    this.notificationService.showSuccess('Proveedor eliminado');

    this.proveedoresService.deleteProvedores(this.idProvedor).subscribe({
      next: (response) => {
        console.log('Proveedor eliminado correctamente:', response);
        this.obtenerProveedores()
        this.notificationService.showSuccess('Proveedor eliminado');

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
