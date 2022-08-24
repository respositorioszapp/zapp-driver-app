import { Component, NgZone } from '@angular/core';
import { RealtimeService } from '../services/realtime.service';
import { Geolocation, Capacitor, LocalNotifications } from '@capacitor/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

import { NetworkStatusService } from '../services/network-status.service';
import { BackgroundService } from '../services/background.service';
import { GeolocationService } from '../services/geolocation.service';
import { environment } from 'src/environments/environment.prod';
import { UiService } from '../services/ui.service';

declare var google: any;

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  constructor(
    ) {

  }

  

  

}
