import {Component, Input} from '@angular/core';
import {Ruta1Component} from "../vista-clientes/ruta1.component";
import {Ruta2Component} from "../Areas_productos/ruta2.component";
import {CommonModule} from "@angular/common";
import {VistaProductosComponent} from "../vista-productos/vista-productos.component";
import {VistaAreaTrabajdorComponent} from "../vista-area-trabajdor/vista-area-trabajdor.component";

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
        return VistaAreaTrabajdorComponent; //esto retorna el componente renderizar
      default:
        return null;
    }
  }
}
