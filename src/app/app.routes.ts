import { Routes } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import {VistaReusableComponent} from "./private/vista-reusable/vista-reusable.component";
import {Ruta1Component} from "./private/vista-clientes/ruta1.component";
import {Ruta2Component} from "./private/Areas_productos/ruta2.component";
import {VistaProductosComponent} from "./private/vista-productos/vista-productos.component";
import {VistaAreaTrabajdorComponent} from "./private/vista-area-trabajdor/vista-area-trabajdor.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
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
        path: 'Areas_productos',
        outlet: 'vista-principal',
        component: Ruta2Component
      }
      ,
      {
        path: 'vista_productos',
        outlet: 'vista-principal',
        component: VistaProductosComponent
      },
      {
        path: 'vista_area_trabajador',
        outlet: 'vista-principal',
        component: VistaAreaTrabajdorComponent //añadimos una ruta para la barra de opciones
      }
    ]
  }
];



