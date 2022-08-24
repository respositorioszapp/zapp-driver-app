import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UiService } from "../../../services/ui.service";
import { AuthService } from "../../../services/auth.service";
import { Router } from '@angular/router';
import { FcmService } from 'src/app/services/fcm.service';
import { RequestService } from 'src/app/services/request.service';

import { StorageService } from "src/app/services/storage.service";
import { environment } from 'src/environments/environment';

import { Capacitor, Geolocation } from '@capacitor/core';
import { NetworkStatusService } from 'src/app/services/network-status.service';
import { RequestLocationPermissionPage } from 'src/app/screens/forms/request-location-permission/request-location-permission.page';

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
  DeviceSettingsRequest
} from "cordova-background-geolocation-lt";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  view = false
  loginData: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  });
  constructor(
    private storage: StorageService,
    private ui: UiService,
    private auth: AuthService,
    private router: Router,
    private fcm: FcmService,
    private request: RequestService,
    private network: NetworkStatusService,

  ) { }

  ngOnInit() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("data");
    localStorage.removeItem("current_order")
    localStorage.removeItem("current_status")
    localStorage.removeItem("current_status")
    localStorage.removeItem("currentDocuments")
    localStorage.removeItem("longitude")
    localStorage.removeItem("latitude")
    localStorage.removeItem("watchPositionId")


  }

  async ionViewWillEnter() {
   
  }

  get controls() {
    return this.loginData.controls;
  }

  async send() {
    if (this.loginData.valid) {
      let { email, password } = this.loginData.value;

      if (this.network.getNetworkStatus().connected) {
        const loadier = this.ui.loading('Por favor espere...');
        this.auth.login(email, password)
          .subscribe(
            async (res: any) => {
              (await loadier).dismiss()
              console.log("Rol id", res.data);
              if (res.data.role.id == 5) {
                console.log("Version", res.data.code_version)
                if (Capacitor.platform !== 'web') {
                  if (res.data.code_version == environment.VERSION_NAME) {
                    this.storage.setObject('data', res.data);
                    localStorage.setItem('isLoggedIn', 'si');
                    localStorage.setItem('data', JSON.stringify(res.data));
                    this.auth.setData();
                    this.sendToken();
                    
                    this.router.navigate([`/tabs/home`]).then(async () => {
                      if (this.auth.user.available != 0) {
                        
                      }

                    });
                    localStorage.removeItem("current_order")
                  } else {
                    await this.ui.presentAlert({
                      mode: 'ios',
                      header: '¡Existe una nueva actualización!',
                      message: 'Por favor actualizala, para obtener mejor rendimiento posible',
                      buttons: [
                        {
                          text: 'Aceptar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: (blah) => {
                            location.href = environment.PLAY_STORE_URL
                          }
                        }
                      ]
                    })
                  }
                } else {
                  this.storage.setObject('data', res.data);
                  localStorage.setItem('isLoggedIn', 'si');
                  localStorage.setItem('data', JSON.stringify(res.data));
                  this.auth.setData();
                  this.sendToken();
                  this.router.navigate([`/tabs/home`]).then(async () => {
                    if (this.auth.user.available != 0) {
                      const position = await Geolocation.getCurrentPosition({
                        enableHighAccuracy: true
                      });

                      // (await loader).dismiss();
                      localStorage.setItem("latitude", position.coords.latitude.toString());
                      localStorage.setItem("longitude", position.coords.longitude.toString());
                    }

                  });
                }

              } else {
                this.ui.showToast("El usuario existe, pero  no tiene acceso a esta aplicación")
              }
            },
            async (err: any) => {
              (await loadier).dismiss()
              if (err.status == 400) {
                this.ui.showToast(err.error.messages[0]);
                return;
              }
              this.ui.showToast("Error de conexión");
            }
          );
      } else {
        this.ui.showToast("Verifique su conexión")
      }

    }
  }

  setView() {
    this.view = !this.view;
  }

  sendToken() {
    if (localStorage.getItem('fcmId')) {

      const obj = {
        user_id: this.auth.user.id,
        token: localStorage.getItem('fcmId'),
        platform: "mobile"
      }
      this.request.post("get_token", obj).subscribe(res => {

      }, err => {

      })

    } else {

    }
  }
}
