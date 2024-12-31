import { Component, OnInit } from '@angular/core';
import { CardViewComponent } from '../../shared/components/card-view-reusable/card-view.component';
import {JsonPipe, NgIf} from "@angular/common";
import {DeleteEvent, TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import { AreaTrabajadoresResponse } from "../../core/services/api/area_trabajadores/AreaTrabajadoresResponse";
import { AreaTrabajadoresService } from "../../core/services/api/area_trabajadores/AreaTrabajadoresService";
import {AlertReusableComponent} from "../../shared/components/alert-reusable/alert-reusable.component";
import {NotificacionReusableComponent} from "../../shared/components/notificacion_reusable/alert.component";
import {NotificationInterface, NotificationService} from "../../core/services/NotificacionService";


@Component({
  selector: 'app-vista-area-trabajdor',
  standalone: true,
  imports: [JsonPipe, TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent, AlertReusableComponent, NgIf, NotificacionReusableComponent],
  templateUrl: './vista-area-trabajdor.component.html',
  styleUrl: './vista-area-trabajdor.component.css'
})
export class VistaAreaTrabajdorComponent implements OnInit{
  //titulo de la tabla area trabajador.
  Titulo: string = "Area de trabajadores";
  titulo_boton_nuevo_registro = "Nueva area"

  idAreaTrabajador: string = "";

  notification: NotificationInterface | null = null; //objeto de notificacion

  DialogVisible = false; // estado para el dialog resuable

  modalAbierto = false; //estado de la venta emergente

  NombreAreatrabajdorSeleccionado : string = "" //cliente que se eliminara para mostrar en el notificacion_reusable

  areaTrabajador: AreaTrabajadoresResponse[] = [];

  //datoa que se muestarn en la vista de area de trabajadores.
  columnas = [
    {key: 'id', label: 'ID Area'},
    {key: 'nombre', label: 'Nombre del area de trabajo'}
  ];

  constructor(private areaTrabajadorService: AreaTrabajadoresService, private notificationService: NotificationService) {
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
    this.obtenerAreaTrabajador();
  }

  obtenerAreaTrabajador() {
    // Asumiendo que quieres obtener el cliente con ID 1
    const ClienteId = 2; // O el ID que necesites

    this.areaTrabajadorService.getAreasTrabajadorById(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del area:', response);
          this.areaTrabajador = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener el area de trabajo:', error);
        }
      });
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  handleDeleteClick(event: DeleteEvent) {
    this.idAreaTrabajador = event.id
    this.NombreAreatrabajdorSeleccionado = event.nombre
    this.mostrarDialog()
  }

  //del dialog
  onConfirm() {
    console.log('Confirmado');
    // Aquí puedes ejecutar tu metodo pérsonalixaso
    this.DialogVisible = false;
    this.notificationService.showSuccess('Area eliminada');

    this.areaTrabajadorService.deleteAreaTrabajadores(this.idAreaTrabajador).subscribe({
      next: (response) => {
        console.log('Area eliminada correctamente:', response);
        this.obtenerAreaTrabajador()
        this.notificationService.showSuccess('Area eliminada');

      },
      error: (error) => {
        console.error('Error al eliminar sucursal:', error);
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
