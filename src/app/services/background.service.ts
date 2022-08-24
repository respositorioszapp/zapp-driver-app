import { Injectable, NgZone } from '@angular/core';
import {
  Capacitor, Plugins, Device, Geolocation, AppState
} from '@capacitor/core';
const { App, BackgroundTask } = Plugins

import { RealtimeService } from './realtime.service';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
import { NetworkStatusService } from './network-status.service';
import { take, filter } from 'rxjs/operators';
import { ForegroundService } from '@ionic-native/foreground-service/ngx';
import { environment } from 'src/environments/environment';





@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  geoLocationSubscription: Subscription
  watchPositionId: string
  interval
  constructor(
    private realtime: RealtimeService,
    private auth: AuthService,
    private network: NetworkStatusService,
    private zone: NgZone,
    public foregroundService: ForegroundService,

  ) {

  }


  /**
   * Start Background MOde
   * This function make the app can work work as a background service
   * It take 3 steps, if one failed the others won't execute anything
   * 1. Check if the user is available
   * 2. Check if the device has FOREGROUND_SERVICE permission
   * 3. Enable the background mode
   */
  async startBackgroundMode() {



    App.addListener("appStateChange", (state: AppState) => {
      clearInterval(this.interval)
      // if (Capacitor.platform !== 'web') {

      // }
      // if (this.geoLocationSubscription) {
      //   this.geoLocationSubscription.unsubscribe()
      // }
      console.log("Background mode");
      if (!state.isActive) {
        if (this.auth.user != null && this.auth.user.available != 0) {
          if (Capacitor.platform !== 'web') {
            console.log("Foreground START")

            this.foregroundService.start('GPS Running', 'Background Service');

          } else {

          }
        }


      } else {
        if (Capacitor.platform !== 'web') {
          this.foregroundService.stop()
        }

      }
    })




  }

  startWatchingPosition(mode?) {
    // if (this.watchPositionId) {
    //   Geolocation.clearWatch({ id: this.watchPositionId });
    // }
    // if (this.geoLocationSubscription) {
    //   this.geoLocationSubscription.unsubscribe();
    // }
    if (this.auth.user != null && this.auth.user.available != 0) {
      this.watchPositionId = Geolocation.watchPosition({
        enableHighAccuracy: true
      }, (position, err) => {
        console.log("This is my position", mode)
        localStorage.setItem("latitude", position.coords.latitude.toString());
        localStorage.setItem("longitude", position.coords.longitude.toString());
        this.geoLocationSubscription = this.realtime.getUserGeolocation().valueChanges().pipe(take(1))
          .subscribe((snapshot: any) => {
            console.log(snapshot);
            console.log("This is my position 2", mode)

            if (snapshot === null) {
              this.realtime.getUserGeolocation().set({
                key: this.auth.user.id,
                user_id: this.auth.user.id,
                latitude: position.coords.latitude.toString(),
                longitude: position.coords.longitude.toString(),
                city_id: this.auth.person.city_id,
                state_id: Number(this.auth.person.state_id),
                level_id: Number(this.auth.user.level_id),
                // last_active: Date.now(),
                available: this.auth.user.available,
                driver_name: this.auth.user.name,
                transport_type_id: this.auth.vehicles.transport_type_id,
                code: environment.VERSION_NAME
              })


            } else {
              // update
              this.realtime.getUserGeolocation().update({
                key: this.auth.user.id,
                user_id: this.auth.user.id,
                latitude: position.coords.latitude.toString(),
                longitude: position.coords.longitude.toString(),
                city_id: this.auth.person.city_id,
                state_id: Number(this.auth.person.state_id),
                level_id: Number(this.auth.user.level_id),
                // last_active: Date.now(),
                available: this.auth.user.available,
                driver_name: this.auth.user.name,
                transport_type_id: this.auth.vehicles.transport_type_id,
                code: environment.VERSION_NAME
              });
            }
          });
      })
    }

  }

  /**
   * Stop Background Mode
   * This is necessary when the user isn't available
   */

  stopBackgroundMode() {
    clearInterval(this.interval)
    if (this.watchPositionId) {


    }
    if (this.geoLocationSubscription) {
      this.geoLocationSubscription.unsubscribe()
    }
    if (Capacitor.platform !== 'web') {
      // if (this.backgroundMode.isActive) {
      //   this.backgroundMode.setEnabled(false);
      //   this.backgroundMode.disable();
      // }
      // this.foregroundService.stop();


    }

  }



  async checkStatus() {

  }
}
