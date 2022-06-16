import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';

@NgModule({
  declarations: [RestaurantsComponent, RestaurantDetailsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    TableModule,
    ButtonModule,
    ImageModule,
    DropdownModule,
  ],
})
export class RestaurantsModule {}
