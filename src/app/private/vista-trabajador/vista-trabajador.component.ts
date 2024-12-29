import { Component, OnInit } from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import { TrabajadoresService } from "../../core/services/api/trabajadores/TrabajadoresService";
import { TrabajadoresResponse } from "../../core/services/api/trabajadores/TrabajadoresResponse";
import { CardViewComponent } from "../../shared/components/card-view-reusable/card-view.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import {DeleteEvent, TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import {AlertReusableComponent} from "../../shared/components/alert-reusable/alert-reusable.component";
import {NotificacionReusableComponent} from "../../shared/components/notificacion_reusable/alert.component";
import {NotificationInterface} from "../../core/services/NotificacionService";
import {NotificationService} from "../../core/services/NotificacionService";

@Component({
  selector: 'app-vista-trabajador',
  standalone: true,
  imports: [JsonPipe, TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent, AlertReusableComponent, NgIf, NotificacionReusableComponent],
  templateUrl: './vista-trabajador.component.html',
  styleUrl: './vista-trabajador.component.css'
})
export class VistaTrabajadorComponent implements OnInit{
  //Titulo de la vista
  Titulo: string = "Trabajadores"

  idTrabajador: string = "";

  notification: NotificationInterface | null = null; //objeto de notificacion

  DialogVisible = false; // estado para el dialog resuable

  modalAbierto = false; //estado de la venta emergente

  NombreTrabajadorSeleccionado : string = "" //cliente que se eliminara para mostrar en el notificacion_reusable

  trabajador: TrabajadoresResponse[] = [];

  //datoa que se muestan en la vista de trabajadores.
  columnas = [
    {key: 'id', label: 'ID del trabajador'},
    {key: 'nombre', label: 'Nombre del trabajador'},
    {key: 'email', label: 'Correo electronico'},
    {key: 'telefono', label: 'Telefono'},
    {key: 'sueldo', label: 'Sueldo'},
    {key: 'id_area_trabajador', label: 'ID del Area del Trbajador'}
  ];

  constructor(private trabajadorService: TrabajadoresService, private notificationService: NotificationService) {
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
    this.obtenerTrabajadores();
  }

  obtenerTrabajadores() {

    const ClienteId = 2; //El ID que necesites.

    this.trabajadorService.getTrabajadoresById(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos del trabajador:', response);
          this.trabajador = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener los trabajadres:', error);
        }
      });
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  handleDeleteClick(event: DeleteEvent) {
    this.idTrabajador = event.id
    this.NombreTrabajadorSeleccionado = event.nombre
    this.mostrarDialog()
  }

  //del dialog
  onConfirm() {
    console.log('Confirmado');
    // Aquí puedes ejecutar tu metodo pérsonalixaso
    this.DialogVisible = false;
    this.notificationService.showSuccess('Trabajador eliminado');

    this.trabajadorService.deleteTrabajadores(this.idTrabajador).subscribe({
      next: (response) => {
        console.log('Trabajador eliminado correctamente:', response);
        this.obtenerTrabajadores()
        this.notificationService.showSuccess('Trabajador eliminado');

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
