// alert.component.ts
import { Component, Input } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert-container" [ngClass]="type">
      <div class="alert-content">
        <div class="alert-icon">
          <i class="material-icons">{{ icon }}</i>
        </div>
        <div class="alert-message">{{ message }}</div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    NgClass
  ],
  styles: [`
    .alert-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      align-items: center;
      padding: 16px 24px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      animation: fadeIn 0.3s ease-in-out;
    }

    .alert-container.success {
      background-color: #4CAF50;
      color: #fff;
    }

    .alert-container.error {
      background-color: #F44336;
      color: #fff;
    }

    .alert-container.warning {
      background-color: #FFC107;
      color: #333;
    }

    .alert-container.info {
      background-color: #2196F3;
      color: #fff;
    }

    .alert-content {
      display: flex;
      align-items: center;
    }

    .alert-icon {
      margin-right: 12px;
      font-size: 24px;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class AlertComponent {
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'success';
  @Input() icon: string = 'check_circle';
  @Input() message: string = '';
}
