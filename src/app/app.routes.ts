import { Routes } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import {VistaReusableComponent} from "./private/vista-reusable/vista-reusable.component";
import {Ruta1Component} from "./private/vista-clientes/ruta1.component";
import {Ruta2Component} from "./private/vista-area_productos/ruta2.component";
import {VistaProductosComponent} from "./private/vista-productos/vista-productos.component";
import {CompraComponent} from "./private/vista-compra/compra.component";
import {VistaAreaTrabajdorComponent} from "./private/vista-area-trabajdor/vista-area-trabajdor.component";
import {VistaSucursalComponent} from "./private/vista-sucursal/vista-sucursal.component";
import {VistaVentaComponent} from "./private/vista-venta/vista-venta.component";
import {VistaProveedorComponent} from "./private/vista-proveedor/vista-proveedor.component";
import {authGuard} from "./core/guards/auth.guard";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        outlet: 'vista-principal',
        component: VistaReusableComponent
      },
      {
        path: 'vista-clientes',
        outlet: 'vista-principal',
        component: Ruta1Component
      },
      {
        path: 'vista-area_productos',
        outlet: 'vista-principal',
        component: Ruta2Component
      }
      ,
      {
        path: 'vista_productos',
        outlet: 'vista-principal',
        component: VistaProductosComponent
      },

      //Vista-area-trabajador.
      {
        path: 'vista_area_trabajador',
        outlet: 'vista-principal',
        component: VistaAreaTrabajdorComponent
      }
      ,

      //Vista vista-compra.
      {
        path: 'vista-compra',
        outlet: 'vista-principal',
        component: CompraComponent
      }
      ,

      //Vista-sucursal.
      {
        path: 'vista_sucursal',
        outlet: 'vista-principal',
        component: VistaSucursalComponent
      }
      ,
      //Vista-venta.
      {
        path: 'vista_venta',
        outlet: 'vista-principal',
        component: VistaVentaComponent
      }
      ,
      //Vista-proveedor.
      {
        path: 'vista_proveedor',
        outlet: 'vista-principal',
        component: VistaProveedorComponent
      }
      ,
      //Vista=trabajador
      {
        path: 'vista_trabajador',
        outlet: 'vista-principal',
        component: VistaProveedorComponent
      }
    ]
  }
];



