import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combo-box-reusable',
  standalone: true,
  templateUrl: `./combo-box-reusable.component.html`,
  styleUrls: [`./combo-box-reusable.component.css`]
})
export class ComboBoxReusableComponent {
  @Input() options: Array<{ label: string; value: any }> = [];
  @Input() placeholder: string = 'Seleccione una opción';
  @Input() selectedValue: any = null;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  onSelectionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value !== null) {
      this.selectedValue = value;
      this.selectionChange.emit(value);
    }
  }

}

