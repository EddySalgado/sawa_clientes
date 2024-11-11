import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface NotificationInterface {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root'
})



export class NotificationService {
  private notificationSubject = new Subject<NotificationInterface>();
  notification$ = this.notificationSubject.asObservable();

  showSuccess(message: string) {
    this.notificationSubject.next({ type: 'success', message });
  }

  showError(message: string) {
    this.notificationSubject.next({ type: 'error', message });
  }

  showWarning(message: string) {
    this.notificationSubject.next({ type: 'warning', message });
  }

  showInfo(message: string) {
    this.notificationSubject.next({ type: 'info', message });
  }
}
