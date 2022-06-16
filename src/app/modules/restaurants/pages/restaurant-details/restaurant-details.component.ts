import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {
  data$: any = {};
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
      }),
      tap(console.log)
    );
  }
}
