import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UiService } from 'src/app/services/ui.service';
import { ViewDetailPage } from 'src/app/screens/forms/view-detail/view-detail.page';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NetworkStatusService } from 'src/app/services/network-status.service';

import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  user: User;
  orders = []
  image = "assets/imgs/avatar.svg"
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  store_states = {
    25:{
      message: "Finalizada",
      state: 25,
      class:"button-green"
    },
    31:{
      message: "Cancelada",
      
      state: 31,
     color:"button-cancel"
    },
    36:{
      message: "Cancelada por mensajero",
     
      state: 36,
      color:"button-gray "
    },
    48:{
      message: "Orden no efectiva",
      
      state: 48,
      color:"button-dark"
     
    }

  }
  allLoaded = false
  dataParams: any = {
    total: 0,
    per_page: 5,
    page: 1,
    filters: []
  };
  nextPage = ""
  to = 0
  loadedText: string = ""
  loading = false
  constructor(private ui: UiService,
    private request: RequestService,
    private auth: AuthService,
    private router: Router,
    private network: NetworkStatusService,
    
    ) { }

  ngOnInit() {
  
  }

  async ionViewWillEnter() {
    this.user = this.auth.user;
    this.dataParams.page = 1;
    if (this.network.getNetworkStatus().connected) {
      const loader = await this.ui.loading("Por favor espere...");
      this.request
        .get(`driver/history_services/${this.auth.user.id}?per_page=${this.dataParams.per_page}&page=${this.dataParams.page}`)
        .subscribe(async (res: any) => {
          (await loader).dismiss();
          console.log("Res", res.data.data)
          this.orders = res.data.data;
          this.to = res.data.to;
        }, async (err: any) => {
          (await loader).dismiss();
          this.orders = []


        })
    } else {
      this.ui.showToast("Verifique su conexión");
    }
  }

  async viewDetail(order: any) {
    if (this.network.getNetworkStatus().connected) {
      if (order.status_order == 23) {
        await this.ui.presentAlert({
          mode: 'ios',
          header: '¿Quieres iniciar el viaje?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Sí',
              handler: async () => {
                const modal = await this.ui.presentModal(ViewDetailPage, { order })
                const m = await modal.onDidDismiss();
                this.dataParams.page = 1;
                this.ionViewWillEnter();
              }

            }
          ]
        })
      } else {
        const modal = await this.ui.presentModal(ViewDetailPage, { order })
        const m = await modal.onDidDismiss();
        this.dataParams.page = 1;
        this.ionViewWillEnter();
      }
    } else {
      this.ui.showToast("Verifique su conexión");
    }


  }

  loadData(event) {
    if (this.network.getNetworkStatus().connected) {
      this.dataParams.page++;
      this.loading = true;
      this.request.get(`driver/history_services/${this.auth.user.id}?per_page=${this.dataParams.per_page}&page=${this.dataParams.page}`)
        .subscribe(async (res: any) => {
          console.log("Sucesss")
          res.data.data.map(d => {
            this.orders.push(d)
          })
          console.log("Orders", this.orders)
          this.loading = false;
          event.target.complete();

        }, async (err: any) => {
          console.log("Error")
          event.target.disabled = true;
          this.allLoaded = true;
          this.loading = false;
          console.log("Error", err)
          err.error.data.map(d => {
            this.orders.push(d)
          })
          event.target.complete();
        })
    } else {
      this.ui.showToast("Verifique su conexión")
    }

  }

}
