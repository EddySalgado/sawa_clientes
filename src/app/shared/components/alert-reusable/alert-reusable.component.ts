import { Component,  Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-alert-reusable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-reusable.component.html',
  styleUrl: './alert-reusable.component.css'
})
export class AlertReusableComponent {

  @Input() isVisible: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() confirmText: string = 'Aceptar';
  @Input() cancelText: string = 'Cancelar';
  @Input() showCancel: boolean = true;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

}


