import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DriverLocationService {

  user: any;

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.user = this.authService.user;
  }

  setUser(user) {
    this.user = user;
  }

  // get driver by id
  getDriver() {
    let user = this.authService.user;
    return this.db.object('drivers/' + user.id);
  }

  // update driver's position
  updatePosition(user_id,vehicleId, lat, lng, order) {
    let path = 'order_gps/' + order + '/' + user_id;
    this.db.object(path).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
      console.log(snapshot);
      // insert if not exists
      if (snapshot === null) {
        this.db.object(path).set({
          order,
          key: user_id,
          vehicleId,
          lat,
          lng,
          oldLat: lat,
          oldLng: lng,
          // last_active: Date.now(),
        });

      } else {
        // update
        this.db.object(path).update({
          order,
          key: user_id,
          vehicleId,
          lat,
          lng,
          oldLat: lat,
          oldLng: lng,
          // last_active: Date.now()
        });
      }
    });
  }
}
