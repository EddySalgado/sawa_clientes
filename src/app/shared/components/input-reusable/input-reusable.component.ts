import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import { CommonModule } from '@angular/common'; // Añade esta importación

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input-reusable.component.html',
  styleUrls: ["./input-reusable.component.css"],
  imports: [
    FormsModule,
    CommonModule // Añade CommonModule aquí
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputReusableComponent),
      multi: true
    }
  ]

})
export class InputReusableComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';

  value: string = '';
  onChange: any = (value: string) => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChangeValue(value: string): void {
    this.onChange(value);
  }
}
