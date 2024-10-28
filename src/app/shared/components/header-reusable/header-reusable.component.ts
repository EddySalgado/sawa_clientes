import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-reusable',
  standalone: true,
  imports: [],
  templateUrl: './header-reusable.component.html',
  styleUrl: './header-reusable.component.css'
})
export class HeaderReusableComponent {
  @Input() titulo: string = ""



}
