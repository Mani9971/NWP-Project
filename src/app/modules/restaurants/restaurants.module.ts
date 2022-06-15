import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [CommonModule, RestaurantsRoutingModule],
})
export class RestaurantsModule {}
