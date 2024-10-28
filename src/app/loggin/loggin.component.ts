import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtomReusableComponent } from "../shared/components/button-reusable/buttom-reusable.component";
import { InputReusableComponent } from "../shared/components/input-reusable/input-reusable.component";
import { AuthService } from '../core/services/AuthService';
import { Router } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: `./loggin.component.html`,
  imports: [
    ReactiveFormsModule, InputReusableComponent, ButtomReusableComponent// Inclúyelo aquí también
  ],
  styleUrl: `./loggin.component.css`
})
export class LogginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const { correo, password } = this.loginForm.value;
    this.authService.login(correo, password).subscribe({
      next: (response) => {
        if (response.login && response.status === 200) {
          console.log('Login successful');
          this.router.navigate(['/dashboard']);
        } else {
          alert('Login error, usuario no encontrado');
        }
      },
      error: (error) => {
        console.error('Login error', error);

      }
    });
  }
}

//anfular

