import { Injectable } from '@angular/core';
import { Trip } from '../shared/Trip';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { 
    this.bookingListRef = db.list('/trip/');
  }

  // Create
  createBooking(apt: Trip) {
    return this.bookingListRef.push({
      user: apt.user,
      placeFrom: apt.placeFrom,
      placeTo: apt.placeTo,
      dateFrom: apt.dateFrom,
      dateTo: apt.dateTo,
      grades: apt.grades, 
      trad: apt.trad,
      price: apt.price,
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/trip/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/trip');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Trip) {
    return this.bookingRef.update({
      user: apt.user,
      placeFrom: apt.placeFrom,
      placeTo: apt.placeTo,
      dateFrom: apt.dateFrom,
      dateTo: apt.dateTo,
      grades: apt.grades, 
      trad: apt.trad,
      price: apt.price,
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/trip/' + id);
    this.bookingRef.remove();
  }
}
