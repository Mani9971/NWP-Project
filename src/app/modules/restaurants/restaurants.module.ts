import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { GMapModule } from 'primeng/gmap';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ContactComponent } from './components/contact/contact.component';
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
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    DynamicDialogModule,
    GMapModule,
    TooltipModule,
    BreadcrumbModule,
  ],
  entryComponents: [MapLocationComponent],
})
export class RestaurantsModule {}
