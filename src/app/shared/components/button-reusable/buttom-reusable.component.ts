import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: `./buttom-reusable.component.html`,
  imports: [
    NgClass
  ],
  styleUrls: [`./buttom-reusable.component.css`]
})
export class ButtomReusableComponent {
  @Input() label: string = 'Button';
  @Input() disabled: boolean = false;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Output() buttonClick = new EventEmitter<void>();

  //metodo a ejecutar por el boton
  onClick() {
    this.buttonClick.emit();
  }
}
