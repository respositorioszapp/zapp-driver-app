import { Component, Input, OnInit } from '@angular/core';
import { RealtimeService } from 'src/app/services/realtime.service';
import { Plugins, Capacitor, App, AppState, Network, LocalNotification } from '@capacitor/core';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { NetworkStatusService } from 'src/app/services/network-status.service';
import { DaysService } from 'src/app/services/days.service';
import { PlaceService } from 'src/app/services/place.service';
import { ViewDetailPage } from 'src/app/screens/forms/view-detail/view-detail.page';
import { Subject } from 'rxjs';
import GoogleMapLatLng from 'src/app/interfaces/GoogleMapLatLng';
import { environment } from 'src/environments/environment.prod';
import { GeolocationService } from 'src/app/services/geolocation.service';


const { Geolocation, Haptics, Modals, LocalNotifications } = Plugins;
@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() near: any = true
  @Input() available: any
  @Input() title: string
  @Input() spinner: boolean = false
  @Input() orders: any[] = []
  @Input() otherOrders: any[] = []
  @Input() latLng: Subject<GoogleMapLatLng>
  constructor(private realtime: RealtimeService,
    private request: RequestService,
    private auth: AuthService,
    private ui: UiService,
    private network: NetworkStatusService,
    private days: DaysService,
    private place: PlaceService,
    private geolocation: GeolocationService) { }

  ngOnInit() {
    this.near = this.near == "true" ? true : false
  }


  reject(order: any) {
    this.orders = this.orders.filter(o => o.id != order.id);
    console.log("Orders", this.orders)
    this.realtime.getMassivesOrders().update({
      new_order: 0
    })
    this.auth.person.ordersNearYou = this.orders;
    this.auth.setPerson(this.auth.person)
  }

  async accept(order: any) {
    const loader = await this.ui.loading("Por favor espere...");
    try {
      let latitude;
      let longitude;

      if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
        latitude = localStorage.getItem("latitude");
        longitude = localStorage.getItem("longitude");
      } else {
        const position = await Geolocation.getCurrentPosition({
          // enableHighAccuracy: true
        });
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      }
      const data = new FormData();
      data.append("order_id", order.id);
      data.append("latitude", latitude.toString())
      data.append("longitude", longitude.toString())
      data.append("description", "Orden aceptada")
      data.append("user_id", this.auth.user.id.toString())

      this.request.post("driver/accept_near_order", data)
        .subscribe(async (res: any) => {
          (await loader).dismiss();
          this.realtime.getNewOrder().update({
            proximity: 1
          })
          let details: any[] = order.details ? order.details : order.detail;
          details = details.map(d => {
            return {
              ...d,
              status: 24
            }
          })
          order.details = details;
          details.forEach(detail => {
            this.realtime.getFirebaseCollection(`order_detail_report/${order.id}/${detail.id}`)
              .update({
                ...detail,
                status: 24
              })
          }
          )
          this.orders = this.orders.filter(o => o.id != order.id);
          this.auth.person.ordersNearYou = this.orders;
          this.auth.setPerson(this.auth.person);
          this.otherOrders.unshift(order)
          this.viewDetail(order);
        }, async (err: any) => {
          (await loader).dismiss();
          console.log("ddsd", err)
          if (err.error.messages) {
            await this.ui.presentAlert({
              mode: 'ios',
              header: 'No se ha podido iniciar el servicio',
              message: err.error.messages[0],
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
        });

    } catch (e) {
      (await loader).dismiss();
      this.ui.presentAlert({
        mode: 'ios',
        header: "Advertencia",
        message: "Su ubicación no está disponible, por favor verificar el estado del GPS",
        buttons: [
          {
            text: 'Aceptar',

            cssClass: 'secondary',
            handler: async (res) => {

            }
          }
        ]
      });
    }
  }

  isAboutToEnd(item) {
    return item.details.every(d => d.status == 25 || d.status == 48);
  }

  isOrderActive(order) {
    //Validate if the order is currently active
    const date_service = new Date(order.date);
    const today = new Date();
    const today_date = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    const date_split = order.date.split("-");
    const date_service_date = {
      day: Number(date_split[2]),
      month: Number(date_split[1]),
      year: Number(date_split[0])
    }

    const isToday = Object.keys(today_date).every(key => {
      return (today_date[key] == date_service_date[key]);
    });
    if (isToday) {
      if (order.service_type_id == 3) {
        const details = order.detail ? order.detail : order.details;
        const start_time = order.detail ? order.detail[0].start_time_military_format : order.details[0].start_time_military_format;
        console.log("Start time difference", start_time)
        const now = new Date();
        const now_hour = now.getHours() + ":" + now.getMinutes();
        const start_time_split=start_time.split(" ");
        const start_time_value= start_time_split.length>1?start_time_split[1]:start_time_split[0]
        const differenceInHours = this.days.getHourDiff(start_time_value, now_hour);
        console.log("Difference", differenceInHours)
        const id = Math.round(Math.random() * 100);

        /**
         * This validation calculate the difference and its  
         * true when current time is  after the start_time
         */
        if (differenceInHours >= 0 ) {
          return { active: true, message: "" };
        } else {
          return { active: false, message: "Debe estar en la dirección en el horario establecido" };
        }
      } else {
        return { active: true, message: "" };
      }
    } else {
      return { active: false, message: "El día del servicio ha pasado " };
    }

  }

  async viewDetail(order: any, massive = false) {
    console.log("Order", order)
    if (this.network.getNetworkStatus().connected) {
      if (!massive) {
        if (this.auth.user.available != 0) {
          //Validate the isn't about to end 
          /**
           * The order is about to end 
           * When All the status from order details are finished or not effective
           */
          if (!this.isAboutToEnd(order)) {
            if (order.status_order == 22 || order.status_order == 23) {
              if (order.service_type_id == 3) {
                //Validate if the order is currently active
                const { message, active } = await this.isOrderActive(order);
                if (active) {
                  // this.stopPosition();
                  const loader = await this.ui.loading("Obteniendo ubicación...");
                  try {
                    //Validate if te user is near to the address
                    
                    this.geolocation.getCurrentPosition()
                      .then(async data => {
                        (await loader).dismiss(); 
                        const current_latitude = data.coords.latitude;
                        const current_longitude = data.coords.longitude;
                        const latitude = order.details[0].latitude;
                        const longitude = order.details[0].longitude;
                        const distance = this.place.calcCrow(latitude, longitude, current_latitude, current_longitude);
                        console.log("Distance", distance);
                        if (distance <= 1) {
                          console.log("Está ahí");
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
                                  this.realtime.getFirebaseCollectionObject(`order_gps/${order.id}/${this.auth.user.id}`)
                                    .set({
                                      order: order.id,
                                      key: this.auth.user.id,
                                      vehicleId: this.auth.vehicles.id,
                                      lat: current_latitude,
                                      lng: current_longitude,
                                      oldLat: current_latitude,
                                      oldLng: current_longitude,
                                      angle: 0,
                                      // last_active: Date.now(),
                                      code: environment.VERSION_NAME
                                    })
                                  localStorage.setItem("current_order", JSON.stringify(order));
                                  const modal = await this.ui.presentModal(ViewDetailPage, { order }, 'custom-modal')
                                  modal.onDidDismiss().then((data) => {
                                    this.loadData();

                                  });

                                }

                              }
                            ]
                          })
                        } else {
                          await this.ui.presentAlert({
                            mode: 'ios',
                            header: 'Advertencia',
                            message: 'Debe estar en el punto para iniciar el servicio',
                            buttons: [
                              {
                                text: 'Aceptar',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                  console.log('Confirm Cancel: blah');
                                }
                              }
                            ]
                          })
                        }
                      }).catch(async e=>{
                        (await loader).dismiss(); 
                      })

                  } catch (e) {
                    (await loader).dismiss(); 

                    console.log("Error", e)
                  }
                } else {
                  await this.ui.presentAlert({
                    mode: 'ios',
                    header: 'Advertencia',
                    message,
                    buttons: [
                      {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                          console.log('Confirm Cancel: blah');
                        }
                      }
                    ]
                  })
                }
              } else {
                const current_latitude = parseFloat(localStorage.getItem("latitude"));
                const current_longitude = parseFloat(localStorage.getItem("longitude"));
                this.realtime.getFirebaseCollectionObject(`order_gps/${order.id}/${this.auth.user.id}`)
                  .set({
                    order: order.id,
                    key: this.auth.user.id,
                    vehicleId: this.auth.vehicles.id,
                    lat: current_latitude,
                    lng: current_longitude,
                    oldLat: current_latitude,
                    oldLng: current_longitude,
                    angle: 0,
                    // last_active: Date.now(),
                    code: environment.VERSION_NAME
                  })
                localStorage.setItem("current_order", JSON.stringify(order));
                const modal = await this.ui.presentModal(ViewDetailPage, { order, latLng: this.latLng }, 'custom-modal')
                modal.onDidDismiss().then((data) => {
                  this.loadData();

                });
              }
            } else {
              //Validate if the order status isn´t end or not effective or cancelled or cancelled by the delivery
              if (order.status_order != 25 && order.status_order != 48 && order.status_order != 31 && order.status_order != 36 && !this.isAboutToEnd(order)) {
                //When I'll load the order, I  could update the proximity with it current value on the SQL database
                this.realtime.getNewOrder().update({
                  proximity: order.proximity
                })
                localStorage.setItem("current_order", JSON.stringify(order));
                const modal = await this.ui.presentModal(ViewDetailPage, { order, latLng: this.latLng }, 'custom-modal')
                modal.onDidDismiss().then(r => {
                  localStorage.removeItem("current_order");
                  this.loadData();
                });
              }

            }
          }

        } else {
          this.ui.showToast("Debe estar disponible")
        }
      }
    } else {
      this.ui.showToast("Por favor, verifique su conexión")
    }

  }

  filter() {
    const orders = this.orders.filter(a => a.status_order != 25).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return orders
  }

  async loadData() {
    if (this.network.getNetworkStatus().connected) {
      this.spinner = true;
      let loader;
      if (!localStorage.getItem("current_order")) {
        loader = await this.ui.loading("Por favor espere...");
      }
      this.orders = [];
      this.request.get(`driver/list_current_orders/${this.auth.user.id}`)
        .subscribe(
          async (res: any) => {
            this.spinner = false;
            this.orders = res.data.data;
            console.log("Orders", this.orders);

            if (loader) {
              (await loader).dismiss();

            }


          },
          async (err: any) => {
            if (loader) {
              (await loader).dismiss()

            }
            this.spinner = false;
          });
    } else {
      this.ui.showToast("Verifique su conexión")
    }
  }

}
