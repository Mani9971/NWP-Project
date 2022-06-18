import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantAddAndEditComponent } from './pages/restaurant-add-and-edit/restaurant-add-and-edit.component';
import { UserEntryListComponent } from './pages/user-entry-list/user-entry-list.component';
import { UserEntriesRoutingModule } from './user-entries-routing.module';
import { UserEntriesComponent } from './user-entries.component';

@NgModule({
  declarations: [
    UserEntriesComponent,
    UserEntryListComponent,
    AddRestaurantComponent,
    RestaurantAddAndEditComponent,
  ],
  imports: [
    CommonModule,
    UserEntriesRoutingModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    BreadcrumbModule,
  ],
})
export class UserEntriesModule {}
