import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputTexrComponent} from "./input-texr/input-texr.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTexrComponent],
  templateUrl: '<app-input-texr/>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SAWA_punto_venta';
}
