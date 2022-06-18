import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription, tap } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';
import { NotificationService } from 'src/app/@core/services/notification.service';

@Component({
  templateUrl: './user-entry-list.component.html',
  styleUrls: ['./user-entry-list.component.scss'],
  providers: [ConfirmationService],
})
export class UserEntryListComponent implements OnInit, OnDestroy {
  userRestaurants: any;
  subscription!: Subscription;

  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.apiService.currentUserId$
      .pipe(
        tap(
          (id) =>
            (this.userRestaurants = this.apiService.getUserRestaurants(id))
        )
      )
      .subscribe();
  }

  addEntry() {
    this.router.navigate(['user-entries/add']);
  }

  editEntry(restaurant: any) {
    console.log('restaurant name...', restaurant.name);
    this.router.navigate([
      'user-entries/edit/' + restaurant.id,
      { name: restaurant.name },
    ]);
  }

  deleteEntry(restaurant: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.apiService
          .delete(restaurant.id)
          .then((res: any) => {
            this.notificationService.showSuccessNotification('Entry deleted');
          })
          .catch(() =>
            this.notificationService.showErrorNotification('Error occurred')
          );
      },
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
