import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, ReplaySubject } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public currentUserIdSubject = new ReplaySubject(1);
  public currentUserId$ = this.currentUserIdSubject.asObservable();

  constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((user) =>
      this.currentUserIdSubject.next(user?.uid)
    );
  }

  add(data: Restaurant) {
    return this.afs.collection<Restaurant>('restaurants').add(data);
  }

  update(restaurantId: string, data: any) {
    return this.afs.doc<Restaurant>('restaurants/' + restaurantId).update(data);
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

  getUserRestaurants(currentUserId: any) {
    return this.afs
      .collection<Restaurant>('restaurants', (ref) =>
        ref.where('ownerId', '==', currentUserId)
      )
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

  getMenuItems(restaurantId: string) {
    return this.afs
      .doc('restaurants/' + restaurantId)
      .collection('menuItems')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {
              ...data,
              id: id,
            };
          });
        })
      );
  }

  addItem(restaurantId: string, data: any) {
    return this.afs
      .doc('restaurants/' + restaurantId)
      .collection('menuItems')
      .add(data);
  }

  deleteItem(restaurantId: string, itemId: string) {
    return this.afs
      .doc('restaurants/' + restaurantId)
      .collection('menuItems')
      .doc(itemId)
      .delete();
  }

  updateItem(restaurantId: string, itemId: string, data: any) {
    return this.afs
      .doc('restaurants/' + restaurantId)
      .collection('menuItems')
      .doc(itemId)
      .update(data);
  }
}
