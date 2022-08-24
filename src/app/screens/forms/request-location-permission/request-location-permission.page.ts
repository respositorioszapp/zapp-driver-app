import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Capacitor, App } from '@capacitor/core';
import { Platform } from '@ionic/angular';
// import { BackgroundGeolocation, BackgroundGeolocationAuthorizationStatus } from '@ionic-native/background-geolocation/ngx';
import BackgroundGeolocation, {

  State,
  Config,
  Location,
  LocationError,
  Geofence,
  HttpEvent,
  MotionActivityEvent,
  ProviderChangeEvent,
  MotionChangeEvent,
  GeofenceEvent,
  GeofencesChangeEvent,
  HeartbeatEvent,
  ConnectivityChangeEvent,
  DeviceSettingsRequest,
  AuthorizationStatus
} from "cordova-background-geolocation-lt";

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-request-location-permission',
  templateUrl: './request-location-permission.page.html',
  styleUrls: ['./request-location-permission.page.scss'],
})
export class RequestLocationPermissionPage implements OnInit {
  @Input() request: DeviceSettingsRequest;
  constructor(private ui: UiService, private platform: Platform,
    // private backgroundGeolocation: BackgroundGeolocation,
    private auth:AuthService
  ) {
    this.platform = platform;
    
  }

  ngOnInit() {
  }

  denie() {
    if (Capacitor.platform !== 'web') {
      // App.exitApp()
      try {
        this.auth.logOut();
        navigator['app'].exitApp()
        
      } catch (e) {
        console.log("Error closing app", e)
      }
    } else {
      this.dismiss()
    }
  }

  async accept() {

    this.dismiss()
    localStorage.setItem("background_location_accepted", "accepted");
    try {      
      const status: AuthorizationStatus = await BackgroundGeolocation.requestPermission();    
      if (status == 2) {
        await this.ui.presentAlert({
          mode: 'ios',
          header: '¡Advertencia!',
          message: 'Si la aplicación no tiene perimisos para obtener su ubicación, no podrá tener un correcto funcionamiento',
          buttons: [
            {
              text: 'Aceptar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log("Execute")
              }
            },
          ]
        })
      } else {
        if (status == 3) {
          
          let isIgnoring = await BackgroundGeolocation.deviceSettings.isIgnoringBatteryOptimizations();
          
          if (!isIgnoring) {
            BackgroundGeolocation.deviceSettings.showIgnoreBatteryOptimizations().then((request: DeviceSettingsRequest) => {
              console.log(`- Screen seen? ${request.seen} ${request.lastSeenAt}`);
              console.log(`- Device: ${request.manufacturer} ${request.model} ${request.version}`);

              // If we've already shown this screen to the user, we don't want to annoy them.
              // if (request.seen) {
              //   return;
              // }
              BackgroundGeolocation.deviceSettings.show(request);
              // It's your responsibility to instruct the user what exactly
              // to do here, perhaps with a Confirm Dialog:
            }).catch((error) => {
              // Depending on Manufacturer/Model/OS Version, a Device may not implement
              // a particular Settings screen.
              console.warn(error);
            });
          }
          
          // User clicked [Confirm] button.  Execute the redirect to settings screen:

        }else{
          
        }
      }
    } catch (e) {
      // this.ui.showToast("Hubo un error con Background " + JSON.stringify(e));
    }
  }

  dismiss() {
    this.ui.dismiss()
  }

}
