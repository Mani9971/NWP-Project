import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/@core/models/restaurant';
import { ApiService } from 'src/app/@core/services/api.service';
import { ContactComponent } from '../../components/contact/contact.component';
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
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restaurants = this.apiService.getAll();
  }

  showMap(restaurant: Restaurant) {
    const ref = this.dialogService.open(MapLocationComponent, {
      data: {
        lat: restaurant.coordinates?.latitude,
        lon: restaurant.coordinates?.longitude,
      },
      header: 'Restaurant Location - ' + restaurant.name,
      width: '40%',
    });
  }

  showContactInfo(restaurant: Restaurant) {
    const ref = this.dialogService.open(ContactComponent, {
      data: {
        contact: restaurant.contactInfo,
        email: restaurant.email,
      },
      header: 'Contact information - ' + restaurant.name,
      width: '30%',
    });
  }

  showPriceList(restaurant: any) {
    console.log('restaurant name...', restaurant.name);
    this.router.navigate([
      'restaurants/' + restaurant.id,
      { name: restaurant.name },
    ]);
  }
}
