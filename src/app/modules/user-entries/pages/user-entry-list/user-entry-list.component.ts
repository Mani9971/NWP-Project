import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Restaurant } from 'src/app/@core/models/restaurant';
import { ApiService } from 'src/app/@core/services/api.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.apiService.currentUserId$.subscribe(
      (id) => (this.userRestaurants = this.apiService.getUserRestaurants(id))
    );
  }

  addEntry() {
    this.router.navigate(['user-entries/add']);
  }

  editEntry(restaurant: any) {
    console.log('restaurant name...', restaurant.name);
    this.router.navigate([
      'user-entries/' + restaurant.id,
      { name: restaurant.name },
    ]);
  }

  deleteEntry(restaurant: Restaurant) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
