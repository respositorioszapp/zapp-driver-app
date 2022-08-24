import { Component, QueryList, ViewChildren } from '@angular/core';

import { IonRouterOutlet, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FcmService } from './services/fcm.service';

import { Plugins, NetworkStatus, Capacitor, App, NotificationChannel } from '@capacitor/core';
import { timeout } from 'rxjs/operators';
import { BackgroundService } from './services/background.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UiService } from './services/ui.service';



const { Network, LocalNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  networkStatus: NetworkStatus
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FcmService,
    private background_mode: BackgroundService,
    private location: Location,
    private router: Router,
    private ui: UiService,
  ) {

    Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status;
      console.log("Network status changed", status);
      localStorage.setItem("network_status", JSON.stringify(status));
      if (status.connected) {
        // location.reload()
      }
    });
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));

    // Add or remove the "dark" class based on if the media query matches
    document.body.classList.toggle('dark', true);
    this.backButtonEvent()
    this.initializeNetwork()
    this.initializeApp();


  }

  toggleDarkTheme(shouldAdd) {
    console.log("shouldAdd", shouldAdd)
    document.body.classList.toggle('dark', shouldAdd);
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        console.log(`Url ${this.router.url}`)
        if (!this.router.url.includes('tabs/home')) {
          // await this.router.navigate(['/']);
          await this.location.back();
        } else if (this.router.url.includes('tabs/home')) {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }

      });
    });
  }

  async presentAlertConfirm() {
    this.ui.presentAlert({
      // header: 'Confirm!',
      message: 'Está seguro de querer salir de la app?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Cerrar Aplicación',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })



  }

  async initializeNetwork() {
    this.networkStatus = await Network.getStatus();
    localStorage.setItem("network_status", JSON.stringify(this.networkStatus));
    console.log("Network status ", this.networkStatus)
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.initPush();
      //this.backgroundMode.enable();
    });
  }


}
