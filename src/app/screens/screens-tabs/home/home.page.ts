import { Component, OnInit, NgZone, AfterContentInit, ViewChild } from '@angular/core';
import { Plugins, Capacitor, App, AppState, Network, LocalNotification } from '@capacitor/core';


const { Geolocation, Haptics, Modals, LocalNotifications } = Plugins;
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { IonRefresher, LoadingController } from '@ionic/angular';
import { ViewDetailPage } from 'src/app/screens/forms/view-detail/view-detail.page';
import { RealtimeService } from '../../../services/realtime.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment.prod'
import { NetworkStatusService } from '../../../services/network-status.service';
import { take } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
// import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationLocationProvider, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { PlaceService } from 'src/app/services/place.service';
import { DaysService } from 'src/app/services/days.service';
import { BackgroundService } from 'src/app/services/background.service';
import GoogleMapLatLng from 'src/app/interfaces/GoogleMapLatLng';

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
  ConnectivityChangeEvent
} from "cordova-background-geolocation-lt";
import { RequestLocationPermissionPage } from '../../forms/request-location-permission/request-location-permission.page';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentInit {
  @ViewChild(IonRefresher, { read: IonRefresher, static: false }) refresher: IonRefresher;
  count = 1
  spinner = false;
  user: User;
  orders = []
  image = "assets/imgs/avatar.svg"
  latLng: Subject<GoogleMapLatLng> = new Subject<GoogleMapLatLng>()
  orderSubscription: Subscription
  statusSubscription: Subscription
  massiveOrdersSubscription: Subscription
  versionSubscription: Subscription
  orderNearYou:any[]=[]
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
  loading = false;
  fcmId = null;
  audio: any
  interval = null;
  geoLocationSubscription: Subscription
  watchPositionId: string
  backgroundWatcherId: string


  constructor(
    private auth: AuthService,
    private request: RequestService, private ui: UiService,
    private router: Router,
    private loadingController: LoadingController,
    private realtime: RealtimeService,
    private network: NetworkStatusService,
    private db: AngularFireDatabase,
    private place: PlaceService,
    private days: DaysService,
    private backgroundService: BackgroundService
  ) {

  }
  ngAfterContentInit(): void {
    this.startPosition();
  }

  async ngOnInit() {
    this.user = this.auth.user;
    await LocalNotifications.requestPermission()
    //
    App.addListener("appStateChange", (state: AppState) => {
      clearInterval(this.interval)
      console.log("Background mode");
      if (!state.isActive) {

        //Cuando la app está en segundo plano, esperar 6 minutos y reiniciar escuchar la posición
        if (this.auth.user != null && this.auth.user.available != 0) {
          // setTimeout(() => {

          //   this.initializeBackgroundGeolocation();
          //   this.startWatchingPosition()
          // }, 240000)
        }


      } else {


      }
    })

    this.startPosition();

  }


  async ionViewDidEnter() {

    // this.
    // this.startWatchingPosition();
    // this.initializeBackgroundGeolocation()

    Network.addListener('networkStatusChange', async (status) => {

      console.log("Network status changed", status);
      localStorage.setItem("network_status", JSON.stringify(status));
      if (status.connected) {
        Geolocation.clearWatch({ id: this.watchPositionId })
        if (Capacitor.platform !== 'web') {
          // await this.backgroundGeolocation.removeAllListeners()
        }
        // this.initializeBackgroundGeolocation()
      }
    });

  }

  async ionViewWillEnter() {

    this.user = this.auth.user;
    const i = 0;
    if(this.auth.person.ordersNearYou){
      this.orderNearYou=this.auth.person.ordersNearYou;
    }
    this.closeSubscriptions()
    this.initSubscriptions();
    this.verifyCurrentOrder();

    if (this.user.available != 0) {
      this.loadData();
    } else {
      if (this.network.getNetworkStatus().connected) {
        let loader;
        if (!localStorage.getItem("current_order")) {
          loader = await this.loadingController.create({ message: "Por favor espere..." });
          await loader.present();
        }
        this.request.get(`driver/documents/${this.auth.user.id}`)
          .subscribe(async (res: any) => {
            if (!localStorage.getItem("current_order")) {
              (await loader).dismiss();
            }
            const documents = res.data.documents;
            const photo: any[] = documents.filter(d => d["document_type "] == "Foto del conductor")
            if (photo.length > 0) {
              this.image = photo[photo.length - 1].url;
            }

          }, async (err) => {
            if (!localStorage.getItem("current_order")) {
              (await loader).dismiss();
            }

          })
      } else {
        this.ui.showToast("Verifique su conexión")
      }

    }
    const position = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    });

    // (await loader).dismiss();
    localStorage.setItem("latitude", position.coords.latitude.toString());
    localStorage.setItem("longitude", position.coords.longitude.toString());


  }


  verifyCurrentOrder(){
    if (localStorage.getItem("current_order")) {
      const order = JSON.parse(localStorage.getItem("current_order"));
      if(order.service_type_id==3){
        this.request.get(`order/show_order/${order.id}`)
        .subscribe(async (res:any)=>{
          const orderDatabase= res.data;
          const myDetails=orderDatabase.detail.filter(d=> d.people_id==this.auth.user.id);
          if(myDetails.length>0){
            const detailData= myDetails[0];
            if(detailData.status==25){
              if(orderDatabase.status_order==25){
                localStorage.removeItem("current_order");
                await this.ui.presentAlert({
                  mode: 'ios',
                  header: "Advertencia",
                  message:"Esta orden ya ha sido finalizada"
                  
                })
              }else{
                const otherDetails = orderDatabase.detail.filter(d=> d.people_id!=this.auth.user.id);
                if(otherDetails.length==0){
                  this.endService(orderDatabase);
                }
              }
            }else{
              this.viewDetail(order);
            }
          }
          
        })
      }else{
        this.viewDetail(order);
      }
    }
  }

  clearLocals() {
    localStorage.removeItem("current_order");
    localStorage.removeItem("total_charge");
    localStorage.removeItem("initTimer");
    localStorage.removeItem("client_configuration_data");
    localStorage.removeItem("configuration_data");
    localStorage.removeItem("timer");
    localStorage.removeItem("bearing");
    localStorage.removeItem("bearing_used");
    localStorage.removeItem("app_close_date")
    const idInterval = Number(localStorage.getItem("id_interval"));
    clearInterval(idInterval)
    localStorage.removeItem("id_interval");
  }

  getOrderAlertMessage(order, isMassive?) {
    const pay = order.payment_method.toLowerCase() == 'efectivo' ? order.zapp_store_order == 1 ? order.total_zapp_store : order.total : 0;
    let details: any[] = order.details ? order.details : order.detail;
    let message = "Tipo de servicio: <strong>" + order.service_type + "</strong>"
    if (order.service_type_id != "3") {
      message += "<br/> Recorrido :  <strong>" + (order.round_trip == 1 ? 'Ida y Vuelta' : 'Ida') + "</strong>"
      message += "<br>Cantidad :<strong>" + (details.length) + " direcciones </strong>"
      message += "<br> Método de pago: <strong>" + (order.payment_method) + "</strong>";
      + "<br> Tipo de accesorio: <strong>" + (order.accessory_type) + "</strong>";
      message += "<br> Día del servicio : <strong>" + (order.date) + "</strong>";
    }

    if (order.service_type_id == "1") {
      message += "<br> Dirección A : <strong>" + (details[0].address) + "</strong>"
        + "<br> Dirección B :<strong>" + (details[1].address) + "</strong>";
    }
    if (order.service_type_id == "3") {
      message += "<br> Día del servicio : <strong>" + (order.date) + "</strong>"
      message += "<br> Dirección : <strong>" + (details[0].address) + "</strong>"
      message += "<br> Hora de inicio : <strong>" + (details[0].start_time) + "</strong>"
        + "<br> Hora de salida :<strong>" + (details[0].departure_time) + "</strong>";
      message += "<br> Número de horas :<strong>" + (details[0].number_of_hours) + "</strong>";
    } else {
      if (order.payment_method.toLowerCase() == 'masivo') {
        let cash = 0;
        details.forEach(d => {
          cash += d.declared_value ? d.declared_value : 0;
        })
        message += "<br> Cobrar: <strong>$" + (cash) + "</strong>"
      } else {
        message += "<br> Cobrar: <strong>$" + (pay) + "</strong>"
      }
    }
    return message;
  }

  initSubscriptions() {
    console.log("Init Subscription")
    this.startMassiveOrderSubscription()
    this.startNewOrdersSubsriptions();
    this.startStatusSubscription();
    this.listenToVersionChange()
  }

  listenToVersionChange() {
    this.versionSubscription = this.realtime.getFirebaseCollectionObject("code_version_mobile/5")
      .valueChanges().subscribe(async (res: any) => {
        if (res != null) {
          console.log("Res version code", res)
          if (localStorage.getItem("current_version")) {
            const status = JSON.parse(localStorage.getItem("current_version"));
            console.log("current_version", status);
            console.log("res", res);
            console.log("equal", res === status)
            if (res.code == status.code) {
              return;
            } else {
              localStorage.setItem("current_version", JSON.stringify(res));
            }
          } else {
            console.log("elseeee");
            localStorage.setItem("current_version", JSON.stringify(res));
          }
          if (res.code != environment.VERSION_NAME) {
            await this.ui.presentAlert({
              mode: 'ios',
              header: '¡Hay nueva versión disponible!',
              message: 'Por favor, descargala',
              buttons: [
                {
                  text: 'Aceptar',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                    console.log("Execute")
                    this.auth.logOut()
                  }
                },
              ]
            })
          }
        } else {
          this.realtime.getFirebaseCollectionObject("code_version_mobile/5").set({
            code: environment.VERSION_NAME
          })
        }
      })
  }

  startStatusSubscription() {
    let verified = this.auth.user.verified;
    this.statusSubscription = this.realtime.getStatus().valueChanges()
      .subscribe(async (res: any) => {
        console.log("Status", res)

        if (res != null) {

          if (localStorage.getItem("current_status")) {
            const status = JSON.parse(localStorage.getItem("current_status"));
            console.log("current_status", status);
            console.log("res", res);
            console.log("equal", res === status)
            if (res.verified == status.verified && res.documents == status.documents && res.first_time_verified == status.first_time_verified) {
              return;
            } else {
              localStorage.setItem("current_status", JSON.stringify(res));
            }
          } else {
            console.log("elseeee");
            localStorage.setItem("current_status", JSON.stringify(res));
          }
          if (verified == 1) {
            verified = 0;
            return;
          }
          this.auth.user.verified = res.verified;
          this.user.verified = res.verified;
          let header;

          if ((res.verified == 1 && res.documents == 1) || res.verified == 1) {

            header = '¡Enhorabuena, has sido verificado!';
            if (this.user.available == 1) {
              this.loadData();
            }
          } else {
            if (res.verified == 0 && res.documents == 1) {

              header = res.first_time_verified == 0
                ? 'Enhorabuena, has completado tu registro, una operadora está verficando tu información y posteriormente serás activado ' :
                '¡Tu usuario ha sido inhabilitado, contacta al administrador!';
              console.log("Header", header)
              this.user.available = 0;
              this.auth.user.available = 0;
              this.orders = []
            } else {
              if (res.verified == 0 && res.documents == 0) {
                header = 'Completa tu información para terminar el regitro y serás habilitado por una operadora';
              }
            }
          }
          this.auth.setUser(this.user);
          let message;
          this.ui.presentAlert({
            mode: 'ios',
            header,
            message,
            buttons: [
              {
                text: 'Aceptar',
                role: res.verified == 0 && res.documents == 0 ? undefined : 'cancel',
                cssClass: 'secondary',
                handler: () => {

                  if (res.verified == 0 && res.documents == 0) {
                    this.router.navigate(['tabs/documents'])
                  }
                  console.log('cerrar');
                }
              }
            ]
          });
          if (!localStorage.getItem("firstTime" + this.auth.user.id)) {
            localStorage.setItem("firstTime" + this.auth.user.id, JSON.stringify({}))
            let message = "Zapp Driver App te da la bienvenida <br> ";
            message += this.auth.person.first_name.toString().toUpperCase() + " ";
            message += this.auth.person.last_name.toString().toUpperCase() + " <br> ";
            message += "Te recomendamos que para tener la mejor experiencia posible que mantengas el GPS encendido <br>"
            message += " <br> Muchas gracias y disfruta de la aplicación"
            this.ui.presentAlert({
              mode: 'ios',
              header: "Bienvennido",
              message,
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
        } else {
          this.realtime.getStatus().update({
            verified: 0,
            documents: 0,
            first_time_verified: 0
          })
        }
      })
  }

  startMassiveOrderSubscription() {
    this.massiveOrdersSubscription = this.realtime.getMassivesOrders().valueChanges()
      .subscribe(async (res: any) => {
        console.log("Massive order", res)
        if (res != null) {


          if (res.new_order == 1) {
            const order = res.orders;
            if (order != null && Object.keys(order).length > 0) {
              const { message: activeMessage, active } = await this.isOrderActive(order);
              if (active) {
                if (!localStorage.getItem("current_order")) {
                  this.playAudio();
                  if(!this.orderNearYou.find(o=>o.id==order.id)){
                    this.orderNearYou.push(order);
                    this.auth.person.ordersNearYou=this.orderNearYou;
                    this.auth.setPerson(this.auth.person)
                  }
                }
              }

            }
          }
        }
      })
  }

  startNewOrdersSubsriptions() {
    this.orderSubscription = this.realtime.getNewOrder().valueChanges().subscribe((res: any) => {
      console.log("res", res)
      if (res != null) {
        console.log("snapshot", res);
        if (res.new_order == 1) {
          const order = res.orders;

          const item = this.orders.find(o => o.id == order.id);
          if (!item) {
            this.playAudio()
            // Haptics.vibrate();
            this.orders.unshift(order);

            this.realtime.getNewOrder().update({
              new_order: 0,
              orders: {},
              proximity: 1
            });
            const details= order.details? order.details:order.detail;
            
            this.realtime.getFirebaseCollectionObject(`order_detail_report/${order.id}/${details[0].id}`)
            .valueChanges().subscribe((res:any)=>{
              if(res==null){
                this.realtime.getFirebaseCollectionObject(`order_detail_report/${order.id}/${details[0].id}`)
                .set({
                  ...details[0]
                })
              }
            })
            
          }
        }

      }

    })
  }

  closeSubscriptions() {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe()
    }
    if (this.orderSubscription) {
      this.orderSubscription.unsubscribe();
    }
    if (this.massiveOrdersSubscription) {
      this.massiveOrdersSubscription.unsubscribe();
    }
  }

  ionViewWillLeave() {
    this.closeSubscriptions();
  }

  isAboutToEnd(item) {
    return item.details.every(d => d.status == 25 || d.status == 48);
  }

  endService(item) {
    console.log("Order", item)
    const data = new FormData();
    // this.ui.showToast("Latitude " + this.latitude + " Longitud" + this.longitude)
    const latitude = localStorage.getItem("latitude");
    const longitude = localStorage.getItem("longitude");
    data.append("order_id", item.id)
    data.append("latitude", latitude)
    data.append("longitude", longitude)
    data.append("description", "Finalización Servicio");
    data.append("user_id", this.auth.user.id.toString())
    const loader = this.ui.loading("Por favor espere...");
    this.request.post("driver/end_service", data).subscribe(
      async (res: any) => {
        (await loader).dismiss();
        item.status_order = 25;
        this.ui.showToast("Orden " + item.id + " finalizada.", () => {

        })
      }, async (err: any) => {
        console.log("Error", err);
        (await loader).dismiss();
        if (err.status == 400) {
          this.ui.showToast(err.error.messages[0])
        }

      })
  }

  async startPosition() {
    if (this.auth.user && this.auth.user.available) {
      if (Capacitor.platform !== 'web') {
        await BackgroundGeolocation.stop();
        this.initializeBackgroundGeolocation()
      } else {
        await Geolocation.clearWatch({ id: this.watchPositionId });
        this.startWatchingPosition();
      }
    }
  }

  async stopPosition() {
    await Geolocation.clearWatch({ id: this.watchPositionId });
    if (Capacitor.platform !== 'web') {
      // await this.backgroundGeolocation.removeAllListeners()
      await BackgroundGeolocation.stop()
    }
  }



  startWatchingPosition(mode?) {
    if (this.auth.user.available != 0) {

      this.watchPositionId = Geolocation.watchPosition({
        // enableHighAccuracy: true
      }, async (position, err) => {
        if (!err) {
          console.log(`Location Update`, JSON.stringify(position));
          // if (Capacitor.platform != 'web') {
          //   Haptics.vibrate();
          // }
          const latitude = localStorage.getItem("latitude");
          const longitude = localStorage.getItem("longitude");
          if (latitude && longitude) {
            try {
              console.log(`Location Update Success`);
              localStorage.setItem("latitude", position.coords.latitude.toString());
              localStorage.setItem("longitude", position.coords.longitude.toString());
              const heading = position.coords.heading ? position.coords.heading : 0;
              let bearing_used;
              if (localStorage.getItem("bearing")) {
                const bearing = localStorage.getItem("bearing");
                bearing_used = bearing;
              }
              localStorage.setItem("bearing", heading.toString())
              let bearing = 0;
              if (bearing_used) {
                bearing = bearing_used;
              } else {
                bearing = 180;
              }
              const actual_angle = heading - (bearing);
              this.latLng.next({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                bearing: actual_angle
              });
              await this.realtime.getUserGeolocation().update({
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
              });
              if (localStorage.getItem("current_order")) {
                const order = JSON.parse(localStorage.getItem("current_order"));
                console.log("Order Next 2",)
                if (order) {
                  let path = 'order_gps/' + order.id + '/' + this.auth.user.id;
                  this.db.object(path).update({
                    order: order.id,
                    key: this.auth.user.id,
                    vehicleId: this.auth.vehicles.id,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    oldLat: position.coords.latitude,
                    oldLng: position.coords.longitude,
                    angle: actual_angle,
                    // last_active: Date.now(),
                    code: environment.VERSION_NAME
                  });
                  this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id)
                    .valueChanges().pipe(take(1)).subscribe((value: any) => {
                      // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
                      if (value === null) {
                        const locations = [{
                          lat: position.coords.latitude, lng: position.coords.longitude, created_at: Date.now()
                        }]
                        // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
                        this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id).set({
                          order,
                          key: this.auth.user.id,
                          user_id: this.auth.user.id,
                          locations,
                          code: environment.VERSION_NAME
                        });

                      } else {
                        // update
                        let locations: any[] = value.locations;
                        locations.push({
                          lat: position.coords.latitude, lng: position.coords.longitude, created_at: Date.now()
                        })
                        this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id)
                          .update({
                            order,
                            key: this.auth.user.id,
                            locations,
                            code: environment.VERSION_NAME
                          });
                      }
                    })
                }
              }
            } catch (e) {
              console.log(`Location Update Error`, e);
            }

          } else {
            localStorage.setItem("latitude", position.coords.latitude.toString());
            localStorage.setItem("longitude", position.coords.longitude.toString());
            const heading = position.coords.heading ? position.coords.heading : 0;
            let bearing_used;
            if (localStorage.getItem("bearing")) {
              const bearing = localStorage.getItem("bearing");
              bearing_used = bearing;
            }
            localStorage.setItem("bearing", heading.toString())
            let bearing = 0;
            if (bearing_used) {
              bearing = bearing_used;
            } else {
              bearing = 180;
            }
            const actual_angle = heading - (bearing);
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
            });
            if (localStorage.getItem("current_order")) {
              const order = JSON.parse(localStorage.getItem("current_order"));
              console.log("Order Next 2",)
              if (order) {
                let path = 'order_gps/' + order.id + '/' + this.auth.user.id;
                this.db.object(path).update({
                  order: order.id,
                  key: this.auth.user.id,
                  vehicleId: this.auth.vehicles.id,
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  oldLat: position.coords.latitude,
                  oldLng: position.coords.longitude,
                  angle: actual_angle,
                  // last_active: Date.now(),
                  code: environment.VERSION_NAME
                });
                this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id)
                  .valueChanges().pipe(take(1)).subscribe((value: any) => {
                    // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
                    if (value === null) {
                      const locations = [{
                        lat: position.coords.latitude, lng: position.coords.longitude, created_at: Date.now()
                      }]
                      // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
                      this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id).set({
                        order,
                        key: this.auth.user.id,
                        user_id: this.auth.user.id,
                        locations,
                        code: environment.VERSION_NAME
                      });

                    } else {
                      // update
                      let locations: any[] = value.locations;
                      locations.push({
                        lat: position.coords.latitude, lng: position.coords.longitude, created_at: Date.now()
                      })
                      this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id)
                        .update({
                          order,
                          key: this.auth.user.id,
                          locations,
                          code: environment.VERSION_NAME
                        });
                    }
                  })
              }
            }
          }
        } else {

          await Geolocation.clearWatch({ id: this.watchPositionId });
          this.startWatchingPosition();
          if (Capacitor.platform !== 'web') {
            // await this.backgroundGeolocation.removeAllListeners()
          }
          this.initializeBackgroundGeolocation()
        }
      });
    }

    // setTimeout(async () => {
    //   await Geolocation.clearWatch({ id: this.watchPositionId });
    //   if (Capacitor.platform !== 'web') {
    //     // await this.backgroundGeolocation.removeAllListeners()
    //   }

    //   this.startWatchingPosition();
    //   this.initializeBackgroundGeolocation()
    // }, 240000)
  }

  async initializeBackgroundGeolocation() {

    if (this.auth.user.available != 0) {
      if (Capacitor.platform !== 'web') {
        // 1.  Listen to events.
        BackgroundGeolocation.onLocation(async location => {
          console.log('[location] - ', location);

          try {
            localStorage.setItem("latitude", location.coords.latitude.toString());
            localStorage.setItem("longitude", location.coords.longitude.toString());
            const heading = location.coords.heading ? location.coords.heading : 0;
            let bearing_used = 0;
            if (localStorage.getItem("bearing")) {
              const bearing = localStorage.getItem("bearing");
              bearing_used = parseFloat(bearing);
            }
            localStorage.setItem("bearing", heading.toString())
            let bearing = 0;
            if (bearing_used != 0) {
              // Angle used before
              bearing = bearing_used
            } else {
              //Image original angle
              bearing = 180;
            }
            const actual_angle = heading - (bearing);
            //Notified modal to update the driver position
            this.latLng.next({
              lat: location.coords.latitude,
              lng: location.coords.longitude,
              bearing: actual_angle
            });
            //Update firebase document driver_geolocation/${city}/${driver_id}
            await this.realtime.getUserGeolocation().update({
              key: this.auth.user.id,
              user_id: this.auth.user.id,
              latitude: location.coords.latitude.toString(),
              longitude: location.coords.longitude.toString(),
              city_id: this.auth.person.city_id,
              state_id: Number(this.auth.person.state_id),
              level_id: Number(this.auth.user.level_id),
              // last_active: Date.now(),
              available: this.auth.user.available,
              driver_name: this.auth.user.name,
              transport_type_id: this.auth.vehicles.transport_type_id,
            });
            console.log("Location Update User Location")
            if (localStorage.getItem("current_order")) {
              const order = JSON.parse(localStorage.getItem("current_order"));
              //Set firebase collection path for order gps order_gps/${order_id}/${user_id}
              let path = 'order_gps/' + order.id + '/' + this.auth.user.id;
              //Update Driver posititon in the order
              await this.db.object(path).update({
                order: order.id,
                key: this.auth.user.id,
                vehicleId: this.auth.vehicles.id,
                lat: location.coords.latitude,
                lng: location.coords.longitude,
                oldLat: location.coords.latitude,
                oldLng: location.coords.longitude,
                angle: actual_angle,
                code: environment.VERSION_NAME
              });
              console.log("Location Update User Location in Order")
            } else {

            }
          } catch (e) {
            console.log(`Location Update Error`, e);
            // this.ui.showToast("Error" + JSON.stringify(e))
          }
        });

        BackgroundGeolocation.onMotionChange(async event => {
          console.log('[motionchange] - ', event.isMoving, event.location);
          const { location } = event;

          try {
            localStorage.setItem("latitude", event.location.coords.latitude.toString());
            localStorage.setItem("longitude", event.location.coords.longitude.toString());
            const heading = event.location.coords.heading ? event.location.coords.heading : 0;
            let bearing_used = 0;
            if (localStorage.getItem("bearing")) {
              const bearing = localStorage.getItem("bearing");
              bearing_used = parseFloat(bearing);
            }
            localStorage.setItem("bearing", heading.toString())
            let bearing = 0;
            if (bearing != 0) {
              // Angle used before
              bearing = bearing_used
            } else {
              //Image original angle
              bearing = 180;
            }
            const actual_angle = heading - (bearing);
            //Notified modal to update the driver position
            this.latLng.next({
              lat: event.location.coords.latitude,
              lng: event.location.coords.longitude,
              bearing: actual_angle
            });
            //Update firebase document driver_geolocation/${city}/${driver_id}
            await this.realtime.getUserGeolocation().update({
              key: this.auth.user.id,
              user_id: this.auth.user.id,
              latitude: event.location.coords.latitude.toString(),
              longitude: event.location.coords.longitude.toString(),
              city_id: this.auth.person.city_id,
              state_id: Number(this.auth.person.state_id),
              level_id: Number(this.auth.user.level_id),
              // last_active: Date.now(),
              available: this.auth.user.available,
              driver_name: this.auth.user.name,
              transport_type_id: this.auth.vehicles.transport_type_id,
            });
            console.log("Location Update User Location")
            if (localStorage.getItem("current_order")) {
              const order = JSON.parse(localStorage.getItem("current_order"));
              if (order) {
                let path = 'order_gps/' + order.id + '/' + this.auth.user.id;

                await this.db.object(path).update({
                  order: order.id,
                  key: this.auth.user.id,
                  vehicleId: this.auth.vehicles.id,
                  lat: event.location.coords.latitude,
                  lng: event.location.coords.longitude,
                  oldLat: event.location.coords.latitude,
                  oldLng: event.location.coords.longitude,
                  angle: actual_angle,
                  // last_active: Date.now(),
                  code: environment.VERSION_NAME
                });
                console.log("Location Update User Location in Order")

              }
            } else {

            }
          } catch (e) {
            console.log(`Location Update Error`, e);
            this.ui.showToast("Error" + JSON.stringify(e))
          }
        });

        BackgroundGeolocation.onHttp(response => {
          console.log('[http] - ', response.success, response.status, response.responseText);
        });

        BackgroundGeolocation.onProviderChange(event => {
          console.log('[providerchange] - ', event.enabled, event.status, event.gps);
        });


        // 2.  Configure the plugin with #ready
        BackgroundGeolocation.ready({
          stopTimeout:1,
          debug: !environment.production,
          logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
          desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
          distanceFilter: 10,
          stopOnTerminate: false,
          startOnBoot: true,
          locationAuthorizationRequest: 'Always',
          backgroundPermissionRationale: {
            title: "Allow access to this device's location in the background?",
            message: "In order to allow X, Y and Z in the background, please enable 'Allow all the time' permission",
            positiveAction: "Change to Allow all the time",
            negativeAction: "Cancel"
          },
          activityType:BackgroundGeolocation.ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION,
          foregroundService:true,
          triggerActivities: "on_foot, walking, running,in_vehicle,on_bicycle"


        }, async (state) => {
          console.log('[ready] BackgroundGeolocation is ready to use');
          if (!state.enabled) {

            await BackgroundGeolocation.start();
            BackgroundGeolocation.changePace(true);
            // 3.  Start tracking.
            if (!localStorage.getItem("background_location_accepted")) {
              // Is Android device ignoring battery optimizations?
              this.ui.presentModal(RequestLocationPermissionPage,)


            }
          }
        });

      }
    }
  }


  playAudio() {
    if (environment.PLAY_AUDIO_ON_REQUEST == true) {
      this.audio = new Audio(environment.AUDIO_PATH);
      this.audio.play();
    }

  }

  stopAudio() {
    this.audio.pause();
  }

  cancel() {
    this.ui.presentAlert({
      mode: 'ios',
      header: "",
      message: "",
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

  async verified() {

    if (this.user.verified == 0) {
      let header = "¡Para ponerte disponible, primero debes ser verificado!";
      let message;
      this.ui.presentAlert({
        mode: 'ios',
        header,
        message,
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (res) => { console.log('cerrar'); }
          }
        ]
      });
    } else {
      if (this.network.getNetworkStatus().connected) {
        const loader = await this.loadingController.create({ message: "Por favor espere...", mode: 'ios' });
        await loader.present();
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
          localStorage.setItem("latitude", latitude.toString());
          localStorage.setItem("longitude", longitude.toString());
          this.auth.user.available = this.auth.user.available == 1 ? 0 : 1;
          this.user.available = this.auth.user.available;

          this.request.post(`driver/change_availability/${this.auth.user.id}`, {
            latitude,
            longitude,
            available: this.auth.user.available
          }).subscribe(async (res: any) => {
            (await loader).dismiss();
            this.realtime.getUserGeolocation().update({
              key: this.auth.user.id,
              user_id: this.auth.user.id,
              latitude: latitude.toString(),
              longitude: longitude.toString(),
              city_id: this.auth.person.city_id,
              state_id: Number(this.auth.person.state_id),
              level_id: Number(this.auth.user.level_id),
              // last_active: Date.now(),
              available: this.auth.user.available,
              driver_name: this.auth.user.name,
              transport_type_id: this.auth.vehicles.transport_type_id,
            });
            if (this.auth.user.available == 0) {
              Geolocation.clearWatch({ id: this.watchPositionId });
              if (Capacitor.platform != 'web') {
                await BackgroundGeolocation.stop();
              }

              // await this.backgroundGeolocation.removeAllListeners();
            } else {
              this.startPosition();
            }

            this.auth.setUser(this.auth.user);
            if (this.auth.user.available == 1) {

              this.ui.showToast("El usuario ahora está disponible");
              this.loadData();
            } else {
              // this.geolocation.stopWatching();
              this.ui.showToast("El usuario ahora  no está disponible");
              const id = localStorage.getItem("watchPositionId");
              if (id) {
                Geolocation.clearWatch({ id })
              }
            }

          }, async (err: any) => {
            (await loader).dismiss();

            this.ui.showToast("Hubo un error y  no se pudo poner disponible");
            this.auth.user.available = this.auth.user.available == 1 ? 0 : 1;
            this.user.available = this.auth.user.available;

            console.log('error');
          })

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
          console.log("Error", e)

        }
      } else {
        this.ui.showToast("Verifique su conexión");
      }
    }
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
            this.refresher.complete();
            this.spinner = false;
            this.orders = res.data.data;
            console.log("Orders", this.orders);
            this.orders.forEach(order => {
              this.setOrderReminder(order);
            })
            if (loader) {
              this.request.get(`driver/documents/${this.auth.user.id}`)
                .subscribe(async (res: any) => {
                  if (!localStorage.getItem("current_order")) {
                    (await loader).dismiss();
                  }
                  const documents = res.data.documents;
                  const photo: any[] = documents.filter(d => d["document_type "] == "Foto del conductor")
                  if (photo.length > 0) {
                    this.image = photo[photo.length - 1].url;
                  }

                }, async (err) => {
                  if (!localStorage.getItem("current_order")) {
                    (await loader).dismiss();
                  }
                })
            }


          },
          (err: any) => {
            this.refresher.complete();
            if (loader) {
              this.request.get(`driver/documents/${this.auth.user.id}`)
                .subscribe(async (res: any) => {
                  if (!localStorage.getItem("current_order")) {
                    (await loader).dismiss();
                  }
                  const documents = res.data.documents;
                  const photo: any[] = documents.filter(d => d["document_type "] == "Foto del conductor")
                  if (photo.length > 0) {
                    this.image = photo[photo.length - 1].url;
                  }

                }, async (err) => {
                  if (!localStorage.getItem("current_order")) {
                    (await loader).dismiss();
                  }
                })
            }
            this.spinner = false;
          });
    } else {
      this.ui.showToast("Verifique su conexión")
    }
  }



  filter() {
    return this.orders.filter(a => a.status_order != 25);
  }

  filterOrderNear(){
    if(this.auth.person.ordersNearYou){
      return this.auth.person.ordersNearYou.filter(o=> !this.orders.find(or=> o.id==or.id)).sort((a,b)=> new Date(a.creation_date).getTime()-new Date(b.creation_date).getTime());
    }
    return []
  }

  async viewDetail(order: any) {
    console.log("Order", order)
    if (this.network.getNetworkStatus().connected) {
      if (this.user.available != 0) {
        //Validate the isn't about to end 
        /**
         * The order is about to end 
         * When All the status from order details are finished or not effective
         */
        if (!this.isAboutToEnd(order)) {
          if (order.status_order == 22 || order.status_order == 23) {
            if (order.service_type_id == 3) {
              //Validate if the order is currently active
              const { message, active } = await this.isOrderActive(order, true);
              if (active) {
                // this.stopPosition();
                // const loader = await this.ui.loading("Por favor espere...");
                try {
                  //Validate if te user is near to the address
                  const current_latitude = parseFloat(localStorage.getItem("latitude"));
                  const current_longitude = parseFloat(localStorage.getItem("longitude"));
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
                } catch (e) {


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
    } else {
      this.ui.showToast("Por favor, verifique su conexión")
    }

  }

  /**
   * This function is only for time service
   * It build two notification 
   * The first one, it show inmediately and the other
   * is scheduled 5 minutes before the start hour that the client put
   * on the order
   * the client
   * @param order 
   */
  async setOrderReminder(order) {
    try {
      if (order) {
        //Validate if the order service type is for time
        if (order.service_type_id == 3) {
          //Validate the order is active
          //Validate if the order is currently active
          const { message, active } = await this.isOrderActive(order);
          if (active) {
            const details = order.detail ? order.detail : order.details;
            const start_time = order.detail ? order.detail[0].start_time_military_format : order.details[0].start_time_military_format;
            const now = new Date();
            const now_hour = now.getHours() + ":" + now.getMinutes();
            const differenceInHours = this.days.getHourDiff(start_time, now_hour);

            const id = Math.round(Math.random() * 100);

            //Validate if the ordeer reminder doesn´t exists
            if (!localStorage.getItem("order_reminder" + order.id)) {
              const startDate = order.date + " " + start_time;
              console.log("Start Date Service", startDate)
              const startTimeDate = new Date(startDate);
              console.log("Start Date Service new Date", new Date(startDate));
              const oneHourBeforeDate = this.days.substractHours(new Date(startDate), 1);
              const fiveMinutesBeforeDate = this.days.substractMinutes(new Date(startDate), 5);
              console.log("Start Date Service One hour before ", oneHourBeforeDate);
              console.log("Start Date Service Five minutes ", fiveMinutesBeforeDate)
              const notificationsToSend: LocalNotification[] = [];
              
              const oneHourBeforeObject = {
                hour: oneHourBeforeDate.getHours(),
                minute: oneHourBeforeDate.getMinutes()
              };
              const fiveMinutesBeforeObject = {
                hour: fiveMinutesBeforeDate.getHours(),
                minute: fiveMinutesBeforeDate.getMinutes()
              };
              const startTimeObject = {
                hour: startTimeDate.getHours(),
                minute: startTimeDate.getMinutes()
              };
              /**
           * This validation calculate the difference and its  
           * true when current time is between one hour before and 10(ten) minutes 
           * after the start_time
           */
              if (differenceInHours > -1 && differenceInHours <= 0.1) {
                notificationsToSend.push(/**
                * Inmediately notification to
                * alert the user
                */
                  {
                    title: "Orden " + order.id,
                    body: "Recuerda que debes estar a las " + details[0].start_time + " en el lugar",

                    id: Math.round(Math.random() * 100),
                    autoCancel: true,
                    channelId: 'pop-notifications'
                  })
              }
              notificationsToSend.push(/**
              * This notification is scheduled to show one hour before 
              * the start_time
              */
                {
                  title: "Orden " + order.id,
                  body: "Recuerda que debes estar a las " + details[0].start_time + " en el lugar",
                  schedule: {
                    on: oneHourBeforeObject
                  },
                  id: Math.round(Math.random() * 100),
                  autoCancel: true,
                  channelId: 'pop-notifications'
                });
              notificationsToSend.push(
                /**
                 * This notification is scheduled to show five minutes before 
                 * the start_time
                 */
                {
                  title: "Orden " + order.id,
                  body: "Recuerda que debes estar a las " + details[0].start_time + " en el lugar faltan cinco minutos",
                  schedule: {
                    on: fiveMinutesBeforeObject
                  },
                  id: Math.round(Math.random() * 100),
                  autoCancel: true,
                  channelId: 'pop-notifications'
                })
              notificationsToSend.push(
                /**
                 * This notification is scheduled to show at the hour
                 * the start_time
                 */
                {
                  title: "Orden " + order.id,
                  body: "¡Ya es hora! " + " Ve a la dirección " + details[0].address,
                  schedule: {
                    on: startTimeObject,

                  },

                  id: Math.round(Math.random() * 100),
                  autoCancel: true,
                  channelId: 'pop-notifications'
                })
              /**
               * This is the first notification shown
               */
              //Show the local notificattions
              await LocalNotifications.schedule({
                notifications: notificationsToSend
              })

              localStorage.setItem("order_reminder" + order.id, "notified")
            }
          }
        }


      } else {
        this.ui.showToast("No hay orden")
      }

    } catch (e) {
      console.log("Error Notification", e)
      this.ui.showToast("Error" + JSON.stringify(e));
    }

  }

  getIsOrderActive(order) {
    const { active, message } = this.isOrderActive(order);
    return { active, message };
  }


  isOrderActive(order, validateHourDifference=true) {
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
        const now = new Date();
        const now_hour = now.getHours() + ":" + now.getMinutes();
        const differenceInHours = this.days.getHourDiff(start_time, now_hour);
        const id = Math.round(Math.random() * 100);

        /**
         * This validation calculate the difference and its  
         * true when current time is between one hour before and 10(ten) minutes 
         * after the start_time
         */
        if(validateHourDifference){
          if (differenceInHours > -1 && differenceInHours <= 0.1) {


            return { active: true, message: "" };
          } else {
            return { active: false, message: "Debe estar en la dirección en el horario establecido" };
          }
        }else{
          if(differenceInHours==0){
            return { active: true, message: "" };
          }else{
            return { active: false, message: "Debe estar en la dirección en el horario establecido" };
          }
        }
        
      } else {
        return { active: true, message: "" };
      }
    } else {
      return { active: false, message: "El día del servicio ha pasado " };
    }

  }

  


}
