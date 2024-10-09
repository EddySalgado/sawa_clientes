import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputReusableComponent} from "./input-reusable/input-reusable.component";
import {LogginComponent} from "./loggin/loggin.component";






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputReusableComponent, LogginComponent],
  template: `

   <app-login></app-login>
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
