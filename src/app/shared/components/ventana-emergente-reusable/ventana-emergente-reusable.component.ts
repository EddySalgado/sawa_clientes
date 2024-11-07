import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-ventana-emergente-reusable',
  standalone: true,
  imports: [
    NgStyle,
    ReactiveFormsModule
  ],
  templateUrl: './ventana-emergente-reusable.component.html',
  styleUrl: './ventana-emergente-reusable.component.css'
})
export class VentanaEmergenteReusableComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() width: string = '500px';
  @Input() showFooter: boolean = true;
  @Input() closeOnOutsideClick: boolean = true;
  @Output() closeModal = new EventEmitter<void>();


  onClose() {
    this.closeModal.emit();
  }

  closeOnOverlay(event: MouseEvent) {
    if (this.closeOnOutsideClick && event.target === event.currentTarget) {
      this.onClose();
    }
  }
}

