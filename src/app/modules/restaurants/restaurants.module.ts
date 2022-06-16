import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { GMapModule } from 'primeng/gmap';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { MapLocationComponent } from './components/map-location/map-location.component';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './pages/restaurant-list/restaurant-list.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';

@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantDetailsComponent,
    RestaurantListComponent,
    MapLocationComponent,
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    TableModule,
    ButtonModule,
    ImageModule,
    DropdownModule,
    DynamicDialogModule,
    GMapModule,
  ],
  entryComponents: [MapLocationComponent],
})
export class RestaurantsModule {}
