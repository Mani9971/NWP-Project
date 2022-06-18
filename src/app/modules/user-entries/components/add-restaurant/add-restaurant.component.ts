import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, Subscription, switchMap } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss'],
})
export class AddRestaurantComponent implements OnInit {
  subscription!: Subscription;
  formGroup: FormGroup;

  private currentUserId = '';
  private isEditMode = false;
  title = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.formGroup = fb.group({
      name: [[], Validators.required],
      email: [[], Validators.email],
      contactInfo: [[], Validators.pattern('[- +()0-9]{6,}')],
      longitude: [],
      latitude: [],
    });
  }

  ngOnInit(): void {
    this.subscription = combineLatest([
      this.apiService.currentUserId$,
      this.route.paramMap,
    ])
      .pipe(
        switchMap(([id, params]: any) => {
          this.currentUserId = id;
          console.log('currentUserId', this.currentUserId);
          let restaurantId = params.get('id');
          if (!restaurantId) {
            return new Observable();
          }

          return this.apiService.getRestaurant(restaurantId).pipe(
            switchMap((restaurant: any) => {
              if (restaurant.ownerId !== this.currentUserId) {
                this.title = 'Add restaurant';
                this.isEditMode = false;
              }
              this.isEditMode = true;
              this.formGroup.patchValue({
                name: restaurant.name,
                email: restaurant.email,
                contactInfo: restaurant.contactInfo,
                longitude: restaurant.coordinates.longitude,
                latitude: restaurant.coordinates.latitude,
              });
              this.title = 'Edit restaurant - ' + restaurant.name;
              return of(restaurant);
            })
          );
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  submitForm() {
    console.log('Save button pressed...');
    if (!this.formGroup.valid) {
      return;
    }

    let values = this.formGroup.value;
    if (!this.isEditMode) {
      this.apiService
        .add({
          name: values.name,
          contactInfo: values.contactInfo,
          coordinates: {
            latitude: values.latitude,
            longitude: values.longitude,
          },
          email: values.email,
          menuItems: [
            { category: '', image: '', info: '', name: '', price: '' },
          ],
          ownerId: this.currentUserId,
        })
        .then((res: any) => {
          console.log('Done!', res);
        })
        .catch(() => console.log('errorOccured!'));
      return;
    }
    //edit request...
    console.log('form submitted with values', this.formGroup.value);
  }
}
