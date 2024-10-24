import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent {
  @Input() dni: string = '';
  @Input() firstLastName: string = '';
  @Input() secondLastName: string = '';
  @Input() names: string = '';
  @Input() birthDate: string = '';
  @Input() sex: string = '';
  @Input() issueDate: string = '';
  @Input() expiryDate: string = '';
  @Input() photoUrl: string = '';
}

