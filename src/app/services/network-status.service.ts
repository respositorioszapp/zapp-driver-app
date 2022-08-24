import { Injectable } from '@angular/core';
import { Plugins, NetworkStatus } from '@capacitor/core';
import { timeout } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { UiService } from './ui.service';

const { Network } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class NetworkStatusService {

  constructor(private ui: UiService) { }

  // getNetworkStatus = (subscription: Observable<Object>, res: any, err: any) {

  // }


  async getNetworkStatusSubscription(subscription: Observable<Object>, res: any, err: any, loader?: any) {
    const networkStatus: NetworkStatus = JSON.parse(localStorage.getItem("network_status"));
    if (networkStatus.connected) {
      subscription.subscribe(res, err);
      if (networkStatus.connectionType.includes("slow")) {
        this.ui.showToast("Su conexión es lenta podría tomar un tiempo");
      }
    } else {
      if (loader) {
        (await loader).dismiss();
      }
      this.ui.presentAlert({
        mode: 'ios',
        header: 'La conexión no está disponible',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {

            }
          },
        ]
      })
    }
  }

  getNetworkStatus() {
    const networkStatus: NetworkStatus = JSON.parse(localStorage.getItem("network_status"));
    return networkStatus;
  }
}
