import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputReusableComponent } from "./input-reusable/input-reusable.component";
import { LogginComponent } from "./loggin/loggin.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './core/service/AuthService'; // Sin espacio al final



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `

   <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sawa inicia sesion';
  isLoggin: boolean = true;
  username: string = "Angel";

   guardar() {
      alert("hoal")
  }
}

