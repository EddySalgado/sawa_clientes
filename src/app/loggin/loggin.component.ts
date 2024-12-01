import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtomReusableComponent } from "../shared/components/button-reusable/buttom-reusable.component";
import { InputReusableComponent } from "../shared/components/input-reusable/input-reusable.component";
import { AuthService } from '../core/services/AuthService';
import { Router } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {LocalStorageService} from "../core/services/LocalStorageService";
import { STORAGE_KEYS } from "../constants/Storage-keys"


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
              private router: Router, private storageService : LocalStorageService,
              ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onSubmit() {
    const { correo, password } = this.loginForm.value;
    this.authService.login(correo, password).subscribe({
      next: (response) => {
        if (response.login && response.status === 200) {
          console.log('Login successful');
          console.log(response.id_user);
          console.log(response);
          this.storageService.setItem(STORAGE_KEYS.ID_USER, response.id_user); //guardar el id en memoria
          this.router.navigate(['/dashboard']);
        } else {

          if(response.tipo_user == "usuario no registrado"){
            alert("usuario no registrado")
          }
          else {
            alert("codigo de error: 2002")
          }
        }
      },
      error: (error) => {
        console.error('Login error', error);

      }
    });
  }
}

//anfular

