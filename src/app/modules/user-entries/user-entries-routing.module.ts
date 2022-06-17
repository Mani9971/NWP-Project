import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantAddAndEditComponent } from './pages/restaurant-add-and-edit/restaurant-add-and-edit.component';
import { UserEntryListComponent } from './pages/user-entry-list/user-entry-list.component';
import { UserEntriesComponent } from './user-entries.component';

const routes: Routes = [
  {
    path: '',
    component: UserEntriesComponent,
    children: [
      { path: '', component: UserEntryListComponent },
      { path: 'add', component: RestaurantAddAndEditComponent },
      { path: 'edit/:id', component: RestaurantAddAndEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEntriesRoutingModule {}
