import {Component, Input} from '@angular/core';
import {Ruta1Component} from "../vista-clientes/ruta1.component";
import {Ruta2Component} from "../Areas_productos/ruta2.component";
import {CommonModule} from "@angular/common";
import {VistaProductosComponent} from "../vista-productos/vista-productos.component";
import {VistaAreaTrabajdorComponent} from "../vista-area-trabajdor/vista-area-trabajdor.component";
import {CompraComponent} from "../compra/compra.component";
import {VistaSucursalComponent} from "../vista-sucursal/vista-sucursal.component";
import {VistaVentaComponent} from "../vista-venta/vista-venta.component";
import {VistaProveedorComponent} from "../vista-proveedor/vista-proveedor.component";
import {VistaTrabajadorComponent} from "../vista-trabajador/vista-trabajador.component";

@Component({
  selector: 'app-vista-reusable',
  standalone: true,
  imports: [CommonModule, Ruta1Component, Ruta2Component],
  templateUrl: './vista-reusable.component.html',
  styleUrl: './vista-reusable.component.css'
})
export class VistaReusableComponent {
  @Input() ruta: string = '';

  getComponenteRuta() {
    switch (this.ruta) {
      case 'vista-clientes':
        return Ruta1Component;
      case 'Areas_productos':
        return Ruta2Component;
      case 'vista_productos':
        return VistaProductosComponent;
      case 'vista_area_trabajador':
        return VistaAreaTrabajdorComponent; //retorna el componente de la vista-area-trabajador.
      case 'compra':
        return CompraComponent; //retorna el componente de la vista de compras.
      case 'vista_sucursal':
        return VistaSucursalComponent; //retorna el componente de la vista de sucursal.
      case 'vista_venta':
        return VistaVentaComponent; //retorna el componente de la vista de ventas.
      case 'vista_proveedor':
        return VistaProveedorComponent; //retorna el componente de la vista de proveedor.
      case 'vista_trabajador':
        return VistaTrabajadorComponent; //retorna el componente de la vista de Trabajador.
      default:
        return null;
    }
  }
}
