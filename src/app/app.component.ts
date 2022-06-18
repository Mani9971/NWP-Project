import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription, tap } from 'rxjs';
import { NotificationService } from './@core/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  title = 'NWP-Project';
  constructor(
    private notificationService: NotificationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.subscription = this.notificationService.notifications$
      .pipe(tap((notification: any) => this.messageService.add(notification)))
      .subscribe();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
