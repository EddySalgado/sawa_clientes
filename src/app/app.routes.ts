import { Routes } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import {VistaReusableComponent} from "./private/vista-reusable/vista-reusable.component";
import {Ruta1Component} from "./private/ruta1/ruta1.component";
import {Ruta2Component} from "./private/ruta2/ruta2.component";

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
        path: 'ruta1',
        outlet: 'vista-principal',
        component: Ruta1Component
      },
      {
        path: 'ruta2',
        outlet: 'vista-principal',
        component: Ruta2Component
      }
    ]
  }
];



