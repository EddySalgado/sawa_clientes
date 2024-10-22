import {Component, Input} from '@angular/core';
import {Ruta1Component} from "../ruta1/ruta1.component";
import {Ruta2Component} from "../ruta2/ruta2.component";
import {CommonModule} from "@angular/common";

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
      case 'ruta1':
        return Ruta1Component;
      case 'ruta2':
        return Ruta2Component;
      default:
        return null;
    }
  }
}
