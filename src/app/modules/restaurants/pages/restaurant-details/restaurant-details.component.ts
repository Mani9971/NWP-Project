import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { map, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {
  public items: MenuItem[] = [
    {
      label: 'All restaurants',
      url: 'restaurants',
    },
    {
      label: 'Price list',
    },
  ];

  data$: any = {};
  restaurantName = '';
  categories = [
    { label: 'Fast food', value: 'fast food' },
    { label: 'Hamburgers', value: 'hamburgers' },
    { label: 'Grill', value: 'grill' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Soup', value: 'soup' },
  ];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap((params) =>
        this.apiService.getRestaurant(params['id']).pipe(
          tap(() => {
            this.restaurantName = params['name'];
          }),
          map((restaurant: any) => {
            return restaurant.menuItems.map((x: any) => x);
          })
        )
      )
    );
  }
}
