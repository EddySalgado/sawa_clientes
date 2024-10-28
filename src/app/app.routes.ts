import { Routes } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import {VistaReusableComponent} from "./private/vista-reusable/vista-reusable.component";
import {Ruta1Component} from "./private/vista-clientes/ruta1.component";
import {Ruta2Component} from "./private/Areas_productos/ruta2.component";

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
    ]
  }
];



