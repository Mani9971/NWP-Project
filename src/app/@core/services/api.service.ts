import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public afs: AngularFirestore) {}

  add(data: any) {
    return this.afs.collection<Restaurant[]>('restaurants').add(data);
  }

  delete(resturantId: string) {
    return this.afs.doc('restaurants/' + resturantId).delete();
  }

  getAll(): Observable<Restaurant[]> {
    return this.afs.collection<Restaurant>('restaurants').valueChanges();
  }
}
