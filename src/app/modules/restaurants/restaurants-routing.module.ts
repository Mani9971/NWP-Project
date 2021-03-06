import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './pages/restaurant-list/restaurant-list.component';
import { RestaurantsComponent } from './restaurants.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsComponent,
    children: [
      { path: '', component: RestaurantListComponent },
      { path: ':id', component: RestaurantDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsRoutingModule {}
