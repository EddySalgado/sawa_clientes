import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtomReusableComponent} from "../buttom-reusable/buttom-reusable.component";
import {InputReusableComponent} from "../input-reusable/input-reusable.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: `./loggin.component.html`,
  imports: [
    ReactiveFormsModule, InputReusableComponent, ButtomReusableComponent
  ],
  styleUrl: `./loggin.component.css`
})
export class LogginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {

     alert('Formulario enviado');
      // Aquí iría la lógica para enviar los datos al servidor

  }
}
