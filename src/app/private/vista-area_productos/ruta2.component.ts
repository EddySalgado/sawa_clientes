import {Component, OnInit} from '@angular/core';
import {AreaProductoService} from "../../core/services/api/area_producto/AreaProductoService";
import {AreaProductoResponse} from "../../core/services/api/area_producto/AreaProductoResponse";
import { CardViewComponent } from '../../shared/components/card-view-reusable/card-view.component';
import {JsonPipe, NgIf} from "@angular/common";
import {DeleteEvent, TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import {AlertReusableComponent} from "../../shared/components/alert-reusable/alert-reusable.component";
import {NotificacionReusableComponent} from "../../shared/components/notificacion_reusable/alert.component";
import {NotificationInterface, NotificationService} from "../../core/services/NotificacionService";


@Component({
  selector: 'app-vista-area_productos',
  standalone: true,
  imports: [CardViewComponent, HeaderReusableComponent, TablaReusbaleComponent, JsonPipe, AlertReusableComponent, NgIf, NotificacionReusableComponent],
  templateUrl: './ruta2.component.html',
  styleUrl: './ruta2.component.css'
})
export class Ruta2Component implements OnInit{
  title: string = "Area de productos"

  idAreaProducto: string = "";

  notification: NotificationInterface | null = null; //objeto de notificacion

  DialogVisible = false; // estado para el dialog resuable

  modalAbierto = false; //estado de la venta emergente

  NombreAreaproductoSeleccionado : string = "" //cliente que se eliminara para mostrar en el notificacion_reusable

  areas: AreaProductoResponse[] = [];
  columnas = [
    {key: 'id', label: 'ID Area'},
    {key: 'nombre', label: 'Nombre del Area'}
  ];

  constructor(private areaProductoService: AreaProductoService, private notificationService: NotificationService) {
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
    this.obtenerAreas();
  }

  obtenerAreas() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const clienteId = 2; // O el ID que necesites

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

  cerrarModal() {
    this.modalAbierto = false;
  }

  handleDeleteClick(event: DeleteEvent) {
    this.idAreaProducto = event.id
    this.NombreAreaproductoSeleccionado = event.nombre
    this.mostrarDialog()
  }

  //del dialog
  onConfirm() {
    console.log('Confirmado');
    // Aquí puedes ejecutar tu metodo pérsonalixaso
    this.DialogVisible = false;
    this.notificationService.showSuccess('Area eliminada');

    this.areaProductoService.deleteAreaProducto(this.idAreaProducto).subscribe({
      next: (response) => {
        console.log('Area eliminada correctamente:', response);
        this.obtenerAreas()
        this.notificationService.showSuccess('Area eliminada');

      },
      error: (error) => {
        console.error('Error al eliminar el area:', error);
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
