import { Component, OnInit } from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import { SucursalesResponse } from "../../core/services/api/sucursales/SucursalesResponse";
import { SucursalesService } from "../../core/services/api/sucursales/SucursalesService";
import { CardViewComponent } from "../../shared/components/card-view-reusable/card-view.component";
import { HeaderReusableComponent } from "../../shared/components/header-reusable/header-reusable.component";
import {DeleteEvent, TablaReusbaleComponent} from "../../shared/components/tabla-reusbale/tabla-reusbale.component";
import {AlertReusableComponent} from "../../shared/components/alert-reusable/alert-reusable.component";
import {NotificacionReusableComponent} from "../../shared/components/notificacion_reusable/alert.component";
import {NotificationInterface, NotificationService} from "../../core/services/NotificacionService";

@Component({
  selector: 'app-vista-sucursal',
  standalone: true,
  imports: [JsonPipe, TablaReusbaleComponent, HeaderReusableComponent, CardViewComponent, AlertReusableComponent, NgIf, NotificacionReusableComponent],
  templateUrl: './vista-sucursal.component.html',
  styleUrl: './vista-sucursal.component.css'
})
export class VistaSucursalComponent implements OnInit{
  //Titulo de la vista
  Titulo: string = "Sucursales"
  titulo_boton_nuevo_regisro : string = "Nueva sucursal";

  idSucursal: string = "";

  notification: NotificationInterface | null = null; //objeto de notificacion

  DialogVisible = false; // estado para el dialog resuable

  modalAbierto = false; //estado de la venta emergente

  NombreSucursalSeleccionado : string = "" //cliente que se eliminara para mostrar en el notificacion_reusable

  sucursal: SucursalesResponse[] = [];

  //datoa que se muestan en la vista de sucursales.
  columnas = [
    {key: 'id', label: 'ID de Sucursal'},
    {key: 'nombre', label: 'Nombre de la sucursal'},
    {key: 'direccion', label: 'Direccion de la sucursal'},
    {key: 'telefono', label: 'Telefono'},
  ];

  constructor(private sucursalService: SucursalesService, private notificationService: NotificationService) {
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
    this.obtenerSucursales();
  }

  obtenerSucursales() {

    const ClienteId = 2; //El ID que necesites.

    this.sucursalService.getSucursalesByID(ClienteId)
      .subscribe({
        next: (response) => {
          console.log('Datos de la sucursal:', response);
          this.sucursal = Array.isArray(response) ? response : [response];
        },
        error: (error) => {
          console.error('Error al obtener la sucursal:', error);
        }
      });
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  handleDeleteClick(event: DeleteEvent) {
    this.idSucursal = event.id
    this.NombreSucursalSeleccionado = event.nombre
    this.mostrarDialog()
  }

  //del dialog
  onConfirm() {
    console.log('Confirmado');
    // Aquí puedes ejecutar tu metodo pérsonalixaso
    this.DialogVisible = false;
    this.notificationService.showSuccess('Sucursal eliminada');

    this.sucursalService.deleteSucursales(this.idSucursal).subscribe({
      next: (response) => {
        console.log('Sucursal eliminada correctamente:', response);
        this.obtenerSucursales()
        this.notificationService.showSuccess('Sucursal eliminada');

      },
      error: (error) => {
        console.error('Error al crear sucursal:', error);
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
