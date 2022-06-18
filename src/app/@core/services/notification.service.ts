import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new Subject();
  notifications$ = this.notificationsSubject.asObservable();

  constructor() {}

  showErrorNotification(message: string) {
    this.notificationsSubject.next({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  showSuccessNotification(message: string) {
    this.notificationsSubject.next({
      severity: 'success',
      summary: 'Success!',
      detail: message,
    });
  }
}
