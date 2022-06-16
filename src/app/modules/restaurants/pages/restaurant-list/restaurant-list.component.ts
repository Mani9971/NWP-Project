import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/@core/models/restaurant';
import { ApiService } from 'src/app/@core/services/api.service';
import { MapLocationComponent } from '../../components/map-location/map-location.component';

@Component({
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
  providers: [DialogService],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Observable<Restaurant[]> = new Observable<Restaurant[]>();

  constructor(
    private apiService: ApiService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.restaurants = this.apiService.getAll();
  }

  showMap(restaurant: Restaurant) {
    const ref = this.dialogService.open(MapLocationComponent, {
      data: {
        lat: restaurant.coordinates?.latitude ?? '45.2987136',
        lon: restaurant.coordinates?.longitude ?? '18.8022098',
      },
      header: 'Restaurant Location - ' + restaurant.name,
      width: '70%',
    });
  }

  showContactInfo(restaurant: Restaurant) {
    const ref = this.dialogService.open(MapLocationComponent, {
      data: {
        contact: restaurant.contactInfo,
      },
      header: 'Contact information - ' + restaurant.name,
      width: '70%',
    });
  }

  showPriceList(restaurant: Restaurant) {
    const ref = this.dialogService.open(MapLocationComponent, {
      data: {
        lat: '',
        lon: '',
      },
      header: 'Contact information - ' + restaurant.name,
      width: '70%',
    });
  }
}
