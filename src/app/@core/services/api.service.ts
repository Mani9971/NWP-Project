import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public afs: AngularFirestore) {}

  add(data: any) {
    return this.afs.collection<Restaurant[]>('restaurants').add(data);
  }

  delete(restaurantId: string) {
    return this.afs.doc('restaurants/' + restaurantId).delete();
  }

  getAll() {
    return this.afs
      .collection<Restaurant>('restaurants')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.doc.data() as Restaurant;
            const id = action.payload.doc.id;
            return {
              id,
              ...data,
            };
          });
        })
      );
  }

  getRestaurant(restaurantId: string) {
    return this.afs.doc('restaurants/' + restaurantId).valueChanges();
  }
}
