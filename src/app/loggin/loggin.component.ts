import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtomReusableComponent } from "../shared/components/button-reusable/buttom-reusable.component";
import { InputReusableComponent } from "../shared/components/input-reusable/input-reusable.component";
import { AuthService } from '../core/services/AuthService';
import { Router } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {LocalStorageService} from "../core/services/LocalStorageService";
import { STORAGE_KEYS } from "../constants/Storage-keys"
import { CommonModule } from '@angular/common';
import {AlertReusableComponent} from "../shared/components/alert-reusable/alert-reusable.component";


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: `./loggin.component.html`,
  imports: [
    ReactiveFormsModule, InputReusableComponent, ButtomReusableComponent, CommonModule, AlertReusableComponent// Inclúyelo aquí también
  ],
  styleUrl: `./loggin.component.css`
})
export class LogginComponent {
  loginForm: FormGroup;
  isLoading = false; // Nueva variable para manejar el estado de carga
  showAlert = false; // Controla la visibilidad de la alerta
  alertMessage = ''; // Mensaje de la alerta
  titleMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router, private storageService : LocalStorageService,
              ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    // Activa el spinner
    this.isLoading = true;
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
            this.showAlertMessage('Error de autenticación','Usuario o contraseña incorrectos.');
          }
          else {
            this.showAlertMessage('Error #2002', 'Usuario Inhabilitado.');
          }
        }
        this.isLoading = false;// Desactiva el spinner tras la respuesta
      },
      error: (error) => {
        console.error('Login error', error);
        this.showAlertMessage('Error #2001', 'Error Interno.');
        this.isLoading = false;// Desactiva el spinner en caso de error
      }
    });
  }
  showAlertMessage(title: string, message: string){
    this.titleMessage = title;
    this.alertMessage = message;
    this.showAlert = true;
  }
  handleAlertConfirm(){
    this.showAlert = false;
  }
}

//anfular

