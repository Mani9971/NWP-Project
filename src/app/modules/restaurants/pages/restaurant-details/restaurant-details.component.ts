import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
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
    { label: 'a food', value: 'a food' },
    { label: 'New', value: 'new' },
    { label: 'Negotiation', value: 'negotiation' },
    { label: 'Renewal', value: 'renewal' },
    { label: 'Proposal', value: 'proposal' },
  ];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private afStorage: AngularFireStorage
  ) {}

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
      ),

      map((data) => {
        return data.map((x: any) => {
          return {
            ...x,
            image: this.afStorage
              .ref('Poslužitelj-Klijent-SocketIO.png')
              .getDownloadURL(),
          };
        });
      })
    );
  }
}
