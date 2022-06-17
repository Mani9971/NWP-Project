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
}
