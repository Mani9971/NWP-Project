import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { CardModule } from 'primeng/card';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { UserEntryListComponent } from './pages/user-entry-list/user-entry-list.component';
import { UserEntriesRoutingModule } from './user-entries-routing.module';
import { UserEntriesComponent } from './user-entries.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantAddAndEditComponent } from './pages/restaurant-add-and-edit/restaurant-add-and-edit.component';

@NgModule({
  declarations: [UserEntriesComponent, UserEntryListComponent, AddRestaurantComponent, RestaurantAddAndEditComponent],
  imports: [
    CommonModule,
    UserEntriesRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ConfirmPopupModule,
  ],
})
export class UserEntriesModule {}
