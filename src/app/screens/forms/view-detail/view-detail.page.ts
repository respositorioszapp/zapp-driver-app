import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, AfterContentInit, ViewChild } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
import { EventsPage } from '../events/events.page';
import { Plugins, Capacitor, Network } from '@capacitor/core'
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators'
import { Observable, Subscription } from 'rxjs';
import { PlaceService } from 'src/app/services/place.service';

import { NetworkStatusService } from '../../../services/network-status.service';
import { RealtimeService } from 'src/app/services/realtime.service';

import { environment } from 'src/environments/environment';
// import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { DaysService } from 'src/app/services/days.service';
import GoogleMapLatLng from 'src/app/interfaces/GoogleMapLatLng';
import BackgroundGeolocation from 'cordova-background-geolocation-lt';
import { Platform } from '@ionic/angular';
import { ForegroundService } from '@ionic-native/foreground-service/ngx';

declare var google: any;
const { Geolocation, Haptics } = Plugins



@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.page.html',
  styleUrls: ['./view-detail.page.scss'],
})
export class ViewDetailPage implements OnInit, OnDestroy, AfterContentInit {
  @Input() order: any;
  @Input() orders: any;
  /**Observable para escuchar  la posición actual del conductor*/
  @Input() latLng: Observable<GoogleMapLatLng>
  // @ViewChild(HTMLIonLoadingElement) loading: HTMLIonLoadingElement
  az_arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  statesClasses = {
    "23": "red",
    "24": "blue",
    "25": "green"
  }
  markers = []
  map: any
  distance = ""
  duration = 0
  duration_text = ""
  details = []
  positionTracking: any;
  initTimerB = false
  firstTime = true
  subscription: Subscription
  subscription2: Subscription
  equal_or_greater_than_a_kilometer = true
  minimum_distance
  latitude: any
  longitude: any
  id: string
  markerPoints: any[] = []
  directionsService: any
  directionsDisplay: any
  view_more = false
  proximity: number = 1
  orderSubscription: Subscription
  s = 0;
  m = 0;
  h = 0;
  timer_hour = "00:00:00"
  id_interval
  markers_numbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
  ];
  client_configuration_data: any = {}
  total_charge = 0
  marker_div = null
  paths = []
  keyDetail = "";
  initTime:Date
  locationSubscription: Subscription
  constructor(private ui: UiService,
    private request: RequestService,
    private auth: AuthService,
    private db: AngularFireDatabase,
    private place: PlaceService,
    private network: NetworkStatusService,
    private realtime: RealtimeService,
    private days: DaysService,
    private platform: Platform,
    public foregroundService: ForegroundService,
    // private backgroundGeolocation: BackgroundGeolocation,

  ) { }


  //#region Life Cycle ionic Angular

  async ngOnInit() {

  }

  ngAfterContentInit(): void {
    console.log("Content Init")
    if (this.latLng) {
      console.log("Content Init defined", this.latLng)
      console.log("Content init Markers", this.markerPoints)
      const location = this.latLng;
      this.locationSubscription = location.subscribe((loc: GoogleMapLatLng) => {
        console.log("Content Init Subscribe",loc)
        //Set the marker position
        this.markerPoints[0].setPosition(loc);
        this.updatePosition(this.auth.user.id,this.auth.vehicles.id, loc.lat, loc.lng, loc.bearing);
      });
    }
  }


  ionViewWillLeave() {
    console.log("ionViewWillLeave")
    clearInterval(this.positionTracking);



  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave")
    clearInterval(this.positionTracking);



  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.positionTracking);

  }

  async ionViewDidEnter() {


    // this.changeAvailability(true);

  }

  async ionViewWillEnter() {
    if(this.order.service_type_id==3){
      this.view_more=true;
    }
    // this.icon=encodeURIComponent(this.icon)
    // this.icon = this.icon.replace("<", "\ <")
    this.sTopTimer()


    if (this.order.status_order != 25 && this.order.status_order != 31) {
      if (localStorage.getItem("initTimer") && this.order.service_type_id != 3) {
        this.initTimer();


      }
      this.total_charge = 0;
      if (this.detailActive && this.detailActive.total_charge) {
        this.total_charge = Number(this.detailActive.total_charge);

      }
    }



    clearInterval(this.positionTracking);
    console.log("Proximity", this.proximity);

    // this.changeAvailability()
    if (this.network.getNetworkStatus().connected) {
      //Assign the proximity property from the the SQL database
      // this.proximity = this.order.proximity;
      this.orderSubscription = this.realtime.getNewOrder().valueChanges()
        .subscribe((res: any) => {
          // console.log("New order res", res.proximity)
          if (res != null) {
            if (typeof (res.proximity) != "undefined") {
              //Assign the proximity property from firebase
              this.proximity = res.proximity;
            }

          }
          console.log("Proximity", this.proximity);
        });
      if (this.order.service_type_id != 3) {
        this.request.get("list/attributes?parameter_id=9")
          .subscribe((res: any) => {
            let distance = Number(res.data[0].value);
            this.equal_or_greater_than_a_kilometer = distance >= 1000;
            if (distance >= 1000) {
              distance = distance / 1000;
            }
            this.minimum_distance = distance;
          }, err => {
            this.ui.showToast("Verifique su conexión", () => {
              this.clearLocals()

              this.dismiss()
            })
          });
      }

      console.log("Order", this.order)
      let icon = "";
      clearInterval(this.positionTracking)
      if (this.order.service_type_id != 3) {
        switch (Number(this.auth.vehicles.transport_type_id)) {
          case 4:
            icon = "assets/imgs/moto-new.svg"
            break;
          case 5:
            icon = "assets/imgs/carry.png"
            break;
          case 6:
            icon = "assets/imgs/auto.png"
            break;
        }
        if (this.order.status_order != 31) {
          this.markers.push(icon);
        }

        this.markers_numbers.map((ab, i) => {
          //  
          this.markers.push("/assets/imgs/markers_numbers/" + (i + 1) + '.png')
        });
      }

      const latitude = localStorage.getItem("latitude");
      const longitude = localStorage.getItem("longitude");
      console.log("Order Current", this.order)
      if (this.order.status_order == 22 || this.order.status_order == 23 || this.order.status_order == 53) {
        try {
          const data = new FormData();
          data.append("order_id", this.order.id);
          data.append("latitude", latitude.toString())
          data.append("longitude", longitude.toString())
          data.append("description", "Inicio Servicio")
          data.append("user_id", this.auth.user.id.toString())
          this.request.post('driver/start_service', data)
            .subscribe(async (res: any) => {
              if(this.order.service_type_id == 3){
                
                this.initTimerForTimeService(true);
                this.realtime.getFirebaseCollectionObject(`status_order_mobile/${this.order.city_id}/${this.order.customer_id}/${this.order.id}`)
                  .valueChanges().subscribe((res: any) => {
                    if (res != null) {
                      if (res.status_order == 25) {
                        this.order.status_order=25;
                        this.dismiss()
                        this.clearLocals()
                        if (this.subscription) {
                          this.subscription.unsubscribe()
                        }
                        if (this.subscription2) {
                          this.subscription2.unsubscribe()
                        }
                        this.ui.presentAlert({
                          mode: 'ios',
                          header: 'Orden Finalizada',
                          message: 'La orden ha sido finalizada con éxito',
                          buttons: [
                            {
                              text: 'Aceptar',
                              role: 'cancel',
                              cssClass: 'secondary',
                              handler: (blah) => {

                              }
                            }
                          ]
                        })
                        return
                      }

                    }
                  })
                // this.backgroundMode.on('activate').subscribe(res=>{
                //   console.log("Debug init timer background")
                //   this.initTimerForTimeService(true);
                // })
                // this.backgroundMode.on('deactivate').subscribe(res=>{
                //   console.log("Debug init timer foreground")
                //   this.initTimerForTimeService(true);
                // })
              }
              if (this.order.zapp_store_order == 0) {
                this.order.status_order = 24;
              }
              let details: any[] = this.order.details ? this.order.details : this.order.detail;
              details = details.map(d => {
                const detail = {
                  ...d,
                  status: 24
                };

                return {
                  ...d,
                  status: 24
                }
              })
              details.forEach(detail => {
                this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${detail.id}`)
                  .update({
                    ...detail,
                    status: 24
                  })
              }
              );
              this.order.details = details;




              // this.ui.showToast("Se inició el servicio");
              console.log("Order Current", this.order)
              localStorage.setItem("current_order", JSON.stringify(this.order));
              if (this.order.service_type_id != 3) {
                this.loadMap(true);
              } else {
                //this.initTimerForTimeService()
              }
            }, async (err: any) => {
              console.log("Error", err)
              localStorage.removeItem("current_order");
              this.clearLocals()
              if (err.status == 400) {
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
                        this.dismiss()
                      }
                    },
                  ]
                })
              }

              console.log("Error", err)
            })



        } catch (e) {
          console.log("Error", e)
        }
      } else {
        if (this.order.status_order == 25) {
          this.request
            .get(`driver/events_per_driver/${this.order.id}/${this.auth.user.id}`)
            .subscribe(async (res: any) => {
              const event = res.data.find(e => e.latitude && e.longitude);
              const {
                latitude,
                longitude
              } = event;
              console.log("Event", event)

              this.details.unshift({
                latitude,
                longitude
              })
              this.order.details.map(d => {
                this.details.push({
                  id: d.id,
                  latitude: d.latitude,
                  longitude: d.longitude,
                })
              })
              console.log("Details", this.details)
              this.loadMap(true);

            }, async (err: any) => {
              localStorage.removeItem("current_order");
              this.clearLocals();
              await this.ui.presentAlert({
                mode: 'ios',
                header: 'No se ha podido mostrar el historial',
                buttons: [
                  {
                    text: 'Aceptar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                      this.dismiss()
                    }
                  },
                ]
              })
              console.log("Error", err)
            }
            )
        } else {
          if (this.order.service_type_id != 3) {
            this.loadMap(true);
          } else {
            this.realtime.getFirebaseCollectionObject(`status_order_mobile/${this.order.city_id}/${this.order.customer_id}/${this.order.id}`)
                  .valueChanges().subscribe((res: any) => {
                    if (res != null) {
                      if (res.status_order == 25) {
                        this.order.status_order=25;
                        this.dismiss()
                        this.clearLocals()
                        if (this.subscription) {
                          this.subscription.unsubscribe()
                        }
                        if (this.subscription2) {
                          this.subscription2.unsubscribe()
                        }
                        this.ui.presentAlert({
                          mode: 'ios',
                          header: 'Orden Finalizada',
                          message: 'La orden ha sido finalizada con éxito',
                          buttons: [
                            {
                              text: 'Aceptar',
                              role: 'cancel',
                              cssClass: 'secondary',
                              handler: (blah) => {

                              }
                            }
                          ]
                        })
                        return
                      }

                    }
                  })
            this.initTimerForTimeService()
          }
        }
      }
      try {

        let latitude;
        let longitude;
        if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
          latitude = localStorage.getItem("latitude");
          longitude = localStorage.getItem("longitude");
        } else {
          const position = await Geolocation.getCurrentPosition({
            enableHighAccuracy: true
          });
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
        }
        localStorage.setItem("latitude", latitude.toString());
        localStorage.setItem("longitude", longitude.toString());
        const y: Subscription
          = this.realtime.getUserGeolocation().valueChanges().pipe(take(1))
            .subscribe((snapshot: any) => {
              console.log(snapshot);
              y.unsubscribe();
              if (snapshot === null) {
                this.realtime.getUserGeolocation().set({
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
                })


              } else {
                // update
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
              }
            });
      } catch (e) {
        let latitude;
        let longitude;
        if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
          latitude = localStorage.getItem("latitude");
          longitude = localStorage.getItem("longitude");
          const y: Subscription
            = this.realtime.getUserGeolocation().valueChanges().pipe(take(1))
              .subscribe((snapshot: any) => {
                console.log(snapshot);
                y.unsubscribe();
                if (snapshot === null) {
                  this.realtime.getUserGeolocation().set({
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
                  })


                } else {
                  // update
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
                }
              });
        }
      }
      this.order.step = this.order.details.findIndex(d => d.status != 25);
    } else {
      this.ui.showToast("Verifique su conexión e intentelo de nuevo", () => {
        localStorage.removeItem("current_order");
        this.clearLocals()
        this.dismiss();
      })
    }
  }

  
  //#endregion

  viewMore() {

    this.view_more = !this.view_more;
    if (!this.view_more) {
      clearInterval(this.positionTracking);
    } else {
      if (this.order.status_order != 25) {
        // this.changeAvailability();
      }
    }
  }

  get detailActive() {

    return this.order.details.find(d => d.status != 25 && d.status != 36 && d.status != 48)
  }

  findLetter() {
    let index = 0;
    if (this.order.details) {
      index = this.order.details.findIndex(d => d == this.detailActive)
    } else {
      index = this.order.detail.findIndex(d => d == this.detailActive)
    }
    return this.markers_numbers[index];
  }

  dismiss() {
    clearInterval(this.positionTracking);
    this.ui.dismiss()
  }





  initTimerForTimeService(init=false) {
    this.keyDetail = `initDetailTime${this.detailActive.id}`;
    const initDetailTime = localStorage.getItem(this.keyDetail);
    if (!initDetailTime) {
      this.initTime=new Date();
      localStorage.setItem(this.keyDetail, Date.now().toString());
    }else{
      this.initTime=new Date(Number(initDetailTime));
    }
    this.s = 0;
    this.m = 0;
    this.h = 0;

    if (localStorage.getItem("timer")) {
      const timer = JSON.parse(localStorage.getItem("timer"));
      this.s = timer.seconds;
      this.m = timer.minutes;
      this.h = timer.hours;
    }

    if (this.detailActive.timer) {
      const time = this.detailActive.timer;
      this.s = time.seconds;
      this.m = time.minutes;
      this.h = time.hours;
    }
    let close_time;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    const timer = {
      seconds: this.s,
      minutes: this.m,
      hours: this.h
    };
    this.initTimerB = true;
    localStorage.setItem("initTimer", "yes");
    localStorage.setItem("timer", JSON.stringify(timer));
    if(init && this.id_interval){
      console.log("Debug Clear interval")
      clearInterval(this.id_interval);
    }
    this.id_interval = setInterval(() => {
      this.timerForTimeService()
    }, 1000);
    localStorage.setItem("id_interval", this.id_interval.toString());
  }

  async timerForTimeService() {

    var hAux, mAux, sAux;
    let daysD = 0;
    let close_time;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    const intDate = localStorage.getItem(this.keyDetail);
    var dateFuture:any = new Date(Number(intDate));
    var dateNow:any = new Date();

    var secondsS = Math.floor((dateNow- (dateFuture)) / 1000);
    var minutesS = Math.floor(secondsS / 60);
    var hoursS = Math.floor(minutesS / 60);
    var days = Math.floor(hoursS / 24);
    console.log(`Debug Days ${days} Hours ${hoursS} Minutes ${minutesS} Seconds ${secondsS}`);
    hours = hoursS - (days * 24);
    minutes = minutesS - (days * 24 * 60) - (hours * 60);
    seconds = secondsS - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    console.log(`Debug Days ${daysD} Hours ${hours} Minutes ${minutes} Seconds ${seconds}`);
    this.s = seconds;
    this.m = minutes;
    this.h = hours;
    console.log("Seconds", this.s);


    if (this.s > 59) { this.m++; this.s = 0; }

    if (this.m > 59) { this.h++; this.m = 0; }
    if (this.detailActive) {
      const today = new Date();
      const today_date = {
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear()
      };
      const date_split = this.order.date.split("-");
      const date_service_date = {
        day: Number(date_split[2]),
        month: Number(date_split[1]),
        year: Number(date_split[0])
      }

      const isToday = Object.keys(today_date).every(key => {
        return (today_date[key] == date_service_date[key]);
      });
      if (this.h == Number(this.detailActive.number_of_hours) || !isToday) {
       
        clearInterval(this.id_interval)
        this.clearLocals()
        this.endTimeOrder()
        await this.ui.presentAlert({
          mode: 'ios',
          header: '¡Tu viaje ha finalizado!',
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

    } else {
      console.log("Not exist")
    }
    if (this.h > 24) { this.h = 0; }

    if (this.s < 10) { sAux = "0" + this.s; } else { sAux = this.s; }
    if (this.m < 10) { mAux = "0" + this.m; } else { mAux = this.m; }
    if (this.h < 10) { hAux = "0" + this.h; } else { hAux = this.h; }
    const timer = {
      seconds: this.s,
      minutes: this.m,
      hours: this.h
    }
    console.log("Seconds After", timer.seconds)
    localStorage.setItem("timer", JSON.stringify(timer));

    
    /*
   REGISTER THE CURRENT DATE 
   THE REASON OT THIS IS
     IF THE USER CLOSE THE APPLICATION
     READ IT AND CALCULATE THE DIFFERENCE BETWEEN THE LAST SAVED DATE AND THE CURRENT DATE
   */
  
     this.timer_hour = hAux + ":" + mAux + ":" + sAux;
     if (this.detailActive) {
      const detail = this.order.details.find(d=> d.id==this.detailActive.id);
      console.log("Detail", detail, this.detailActive, this.details)
      detail.timer = timer;
      detail.total_charge = this.total_charge;
      console.log("FIND dETAIL", detail)
      //Update real time timer for the client
      this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${this.detailActive.id}`)
        .update({
          ...detail
        });
      localStorage.setItem("current_order", JSON.stringify(this.order));
    }
    
  }

  getDaysHoursMinutesSecondsFromMiliseconds(ms) {
    let days = 0;
    let daysms = 0;
    let hours = 0;
    let hoursms;
    let minutes;
    let minutesms;
    let sec;
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));

    return { days, hours, minutes, sec };
  }

  initTimer() {
    this.keyDetail = `initDetailTime${this.detailActive.id}`;
    const initDetailTime = localStorage.getItem(this.keyDetail);
    if (!initDetailTime) {
      localStorage.setItem(this.keyDetail, Date.now().toString());
    }
    this.s = 0;
    this.m = 0;
    this.h = 0;
    if (this.detailActive.timer) {
      const time = this.detailActive.timer;
      this.s = time.seconds;
      this.m = time.minutes;
      this.h = time.hours;
      const minuteToCharge= Number(this.m) + (Number(this.h)*60)
      this.total_charge = (Math.floor(minuteToCharge / Number(this.order.time_wait))) * (Number(this.order.rate_per_minute))
      console.log("Total charge", this.total_charge)
      console.log("Timer", time)
    }

    let close_time;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    const timer = {
      seconds: this.s,
      minutes: this.m,
      hours: this.h
    }
    console.log(`Difference Time ${timer.hours}:${timer.minutes}:${timer.seconds}`);
    localStorage.setItem("timer", JSON.stringify(timer));
    this.initTimerB = true;
    localStorage.setItem("initTimer", "yes");
    this.total_charge = 0;

    const detail = this.order.details.find(d => d.id == this.detailActive.id);
    if (detail) {
      detail.timer = timer;
      detail.total_charge = 0;
      
      console.log("Order ", this.order)
      localStorage.setItem("current_order", JSON.stringify(this.order));
    }
    console.log("Detail")

    this.id_interval = setInterval(() => {
      this.timer()
    }, 1000);
    localStorage.setItem("id_interval", this.id_interval.toString());
  }

  sTopTimer() {
    localStorage.removeItem("id_interval");
    clearInterval(this.id_interval)
  }

  timer() {
    let hAux, mAux, sAux;
    let close_time;
    let daysD = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    /**
     * This feature is for when the operating 
     * system close the processes of the application when it restarts 
     * take the App close date and compare it with the current time and get the difference in hours, minutes and seconds
     */
    const intDate = localStorage.getItem(this.keyDetail);
    var dateFuture:any = new Date(Number(intDate));
    var dateNow:any = new Date();

    var secondsS = Math.floor((dateNow- (dateFuture)) / 1000);
    var minutesS = Math.floor(secondsS / 60);
    var hoursS = Math.floor(minutesS / 60);
    var days = Math.floor(hoursS / 24);
    console.log(`Days ${days} Hours ${hoursS} Minutes ${minutesS} Seconds ${secondsS}`);
    hours = hoursS - (days * 24);
    minutes = minutesS - (days * 24 * 60) - (hours * 60);
    seconds = secondsS - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    console.log(`Days ${daysD} Hours ${hours} Minutes ${minutes} Seconds ${seconds}`);
    this.s = seconds;
    this.m = minutes;
    this.h = hours;
    const detail = this.order.details.find(d => d.id == this.detailActive.id);
    if (this.order.time_wait) {
      //if the minute is multiple of order the it recalculate the total charge
        /**
         * With this formula
         * total_charge = (minutes/order_wait_time)*order_rate_per_minute
         */
         this.total_charge = 0;
         const minuteToCharge= Number(this.m) + (Number(this.h)*60)+ (Number(days)*24*60);
         this.total_charge = (Math.floor(minuteToCharge / Number(this.order.time_wait))) * (Number(this.order.rate_per_minute))
         console.log("Total charge", this.total_charge, this.order.time_wait,this.order.rate_per_minute,minuteToCharge,(Math.floor(minuteToCharge / Number(this.order.time_wait))))

    } else {
      console.log("Not exist")
    }
    if (this.s < 10) { sAux = "0" + this.s; } else { sAux = this.s; }
    if (this.m < 10) { mAux = "0" + this.m; } else { mAux = this.m; }
    if (this.h < 10) { hAux = "0" + this.h; } else { hAux = this.h; }
    const timer = {
      seconds: this.s,
      minutes: this.m,
      hours: this.h
    }

    if (detail) {
      detail.timer = timer;
      detail.total_charge = this.total_charge;
      console.log("FIND dETAIL", detail)
      //Update real time timer for the client
      this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${this.detailActive.id}`)
        .update({
          ...detail
        });
      localStorage.setItem("current_order", JSON.stringify(this.order));
    }
    

    this.timer_hour = hAux + ":" + mAux + ":" + sAux;
  }

  clearLocals() {
    //id_interval
    
    localStorage.removeItem("current_order");
    localStorage.removeItem("total_charge");
    localStorage.removeItem("initTimer");
    localStorage.removeItem("client_configuration_data");
    localStorage.removeItem("configuration_data");
    localStorage.removeItem("timer");
    localStorage.removeItem(this.keyDetail)
    localStorage.removeItem("bearing");
    localStorage.removeItem("bearing_used");
    localStorage.removeItem("app_close_date")
    this.sTopTimer()

    if (this.locationSubscription) {
      this.locationSubscription.unsubscribe()
    }
  }

  toNumber(number) {
    return Number(number);
  }

  toogleComment(detail) {
    if (detail.status != 25) {
      if (detail.comment) {
        detail.comment = undefined;
        return;
      }
      detail.comment = "yes";
    } else {
      this.ui.showToast("La direccióon ya está realizada en el detalle del servicio");
    }

  }



  async loadMap(firstTime = false) {
    //obtener usos de la API
    if (this.network.getNetworkStatus().connected) {
      const loader = await this.ui.loading("Por favor espere...");
      try {
        if (this.order.status_order != 25 && this.order.status_order != 31 && this.order.status_order != 48) {
          let latitude;
          let longitude;
          if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
            latitude = localStorage.getItem("latitude");
            longitude = localStorage.getItem("longitude");
          } else {

          }

          this.details.unshift({
            latitude,
            longitude
          })
          this.latitude = latitude;
          this.longitude = longitude;


        }
        if (this.order.status_order != 25) {
          this.order.details.map(d => {
            this.details.push({
              id: d.id,
              latitude: d.latitude,
              longitude: d.longitude,
            })
          })
        }

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        //puntos de referencia para agregar
        var waypts = [];
        var markers = [];
        var infos = [];
        //coordenadas de los puntos de ruta
        for (let i = 0; i < this.details.length; i++) {
          if (this.details[i].latitude && this.details[i].longitude) {
            let latlng = {
              lat: parseFloat(this.details[i].latitude),
              lng: parseFloat(this.details[i].longitude)
            };
            waypts.push({ location: latlng, stopover: true });
          }
        }
        console.log("Way Points", waypts)
        //creo mapa
        const center = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },
          mapTypeControl: false,
          zoomControl: true,
          streetViewControl: false,
        });
        this.map = map;
        //muestro el mapa
        directionsDisplay.setMap(map);

        //ventanas de informacion
        var infoWindow = new google.maps.InfoWindow();
        //coordenadas markers personalizados con ventana de información
        if (this.details.length < 25) {
          for (let i = 0; i < this.details.length; i++) {

            let latlng = {
              lat: parseFloat(this.details[i].latitude),
              lng: parseFloat(this.details[i].longitude)
            };

            console.log("Marker Url", this.markers[i])

            //Adding icon to the marker
            let icon_image = {
              url: this.markers[i], // url
              scaledSize: i == 0 ? new google.maps.Size(35, 50) : new google.maps.Size(35, 50), // size
              // The origin for this image is (0, 0).
              origin: new google.maps.Point(0, 0),
              // The anchor for this image is the base of the flagpole at (0, 32).
              anchor: new google.maps.Point(0, 32), // anchor 
            };
            var marker_icon = icon_image;

            let marker = new google.maps.Marker({
              position: latlng,
              map: map,
              icon: marker_icon,
              id: "dsd",
              optimized: false
            })
            const url = "img[src='" + this.markers[0] + "']";
            console.log("Url", url)
            const y: any = document.querySelectorAll("img[src='assets/imgs/moto-new.svg']");
            this.marker_div = document.querySelector(url)

            this.markerPoints.push(marker);
            // agrego la informacion de la dirección
            console.log("Detail", this.details[i])
            const df = this.order.details.find(d => d.id == this.details[i].id);
            console.log("Df", df);
            if (df) {
              infos.push(df.address);
            }

            if (i != 0) {
              const y = this;

              google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {

                  const df = y.order.details.find(d => d.id == y.details[i].id);
                  console.log("Detail", df)
                  infoWindow.setContent(df.address);
                  infoWindow.open(map, marker);
                }
              })(marker, i));
            }

          }
        }


        // pregunto si es ida y vuelta el servicio
        let origin, destination, return_pt;
        let n = this.order.status_order != 31 ? (this.details.length - 1) : (waypts.length - 1);
        console.log("Length Array", n)

        if (this.order && this.order.round_trip == 1) {
          console.log("Round trip")
          origin = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
          destination = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
          return_pt = { lat: waypts[n].location.lat, lng: waypts[n].location.lng };
          //punto de retorno en km y min
          if ((this.order.status_order != 25)) {

            if (this.order.status_order != 31) {
              this.getDistanceMatrix(return_pt, origin);
            }
          }
        } else {
          origin = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
          destination = { lat: waypts[n].location.lat, lng: waypts[n].location.lng };
          if (this.order.status_order != 25 && this.order.status_order != 31) {
            this.getDistanceMatrix(origin, destination);
          }
        }
        const _this = this;
        console.log("Origin", origin, "Destination", destination)
        console.log("Way Points", waypts)
        if (this.details.length >= 25) {
          //DIVIDIMOS EL DRIVER NEAR ADDRRES EN PARTES DE 25, EL CUAL ES EL LIMITE POR SOLICITUD
          for (var i = 0, parts_driver_address = [], max = 23 - 1; i < this.details.length; i = i + max + 1)
            parts_driver_address.push(this.details.slice(i, i + max + 1));


          for (var i = 0, parts = [], max = 23; i < waypts.length; i = i + max)
            parts.push(waypts.slice(i, i + max));
          //


          console.log('PARTES DEL WPTS', parts);

          // AQUI RECOORO EL ARR PARTS Y HAGO LAS DISITINTAS SOLICITUDES


          /*  **************************************************************************************** */
          /*   *********************INICIO DEL RECORRIDO DE CADA PARTE ***************************** */
          /*  **************************************************************************************** */
          //Aqui definio el numero desde donde empezara el recorrido de marcadore
          let marker_origin_number;
          //

          let array_routed_addresses: any = [];

          for (var i = 0; i < parts.length; i++) {

            // CALCULAR LA DIRECCION MAS LEJANA DE LA PARTE ACTUAL 

            //

            let origin_por_recorrido;
            if (i == 0) {
              origin_por_recorrido = origin;
              console.log('SEGUNDA PARTE', origin_por_recorrido)
            } else {

              origin_por_recorrido = {
                lat: Number(array_routed_addresses[array_routed_addresses.length - 1].latitude),
                lng: Number(array_routed_addresses[array_routed_addresses.length - 1].longitude)
              }
              console.log('SEGUNDA PARTE', origin_por_recorrido)

              marker_origin_number = parts[i - 1].length;

              //
            }
            console.log('marker_origin_number', marker_origin_number)

            var waypoints = [];
            for (var j = 0; j < parts[i].length; j++) {
              waypoints.push(parts[i][j]);
              console.log('I', i, 'J', j);
            }

            let services_options = {
              origin: origin_por_recorrido,
              destination: destination,
              waypoints: waypoints,
              travelMode: google.maps.TravelMode.DRIVING,
              // drivingOptions: {
              //   departureTime: new Date(Date.now()),  // for the time N milliseconds from now.
              //   trafficModel: 'optimistic',

              // },
              // optimizeWaypoints: true,
              // avoidTolls : true
            };
            await this.printDirections(services_options, this.map);

            array_routed_addresses = array_routed_addresses.concat(parts_driver_address[i]);
            // array_routed_addresses = await this.directionServiceFunction(services_options, driver,map,parts_driver_near_address[i]);
            console.log('ESTE ES EL ARRAY ENRUTADO INICIAL LDM', array_routed_addresses)


          }

          for (let i = 0; i < this.details.length; i++) {

            let latlng = {
              lat: parseFloat(this.details[i].latitude),
              lng: parseFloat(this.details[i].longitude)
            };

            console.log("Marker Url", this.markers[i])
            var car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";
            var icon = {
              path: this.markers[0],
              scale: .7,
              strokeColor: 'white',
              strokeWeight: .10,
              fillOpacity: 1,
              fillColor: '#404040',
              offset: '5%',
              // rotation: parseInt(heading[i]),
              anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
            };
            //Adding icon to the marker
            let icon_image = {
              url: this.markers[i], // url
              scaledSize: i == 0 ? new google.maps.Size(50, 50) : new google.maps.Size(35, 50), // size
              // The origin for this image is (0, 0).
              origin: new google.maps.Point(0, 0),
              // The anchor for this image is the base of the flagpole at (0, 32).
              anchor: new google.maps.Point(0, 32), // anchor 
            };
            var marker_icon = icon_image;

            let marker = new google.maps.Marker({
              position: latlng,
              map: map,
              icon: marker_icon,

            })


            this.markerPoints.push(marker);
            // agrego la informacion de la dirección
            console.log("Detail", this.details[i])
            const df = this.order.details.find(d => d.id == this.details[i].id);
            console.log("Df", df);
            if (df) {
              infos.push(df.address);
            }

            if (i != 0) {
              const y = this;

              google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {

                  const df = y.order.details.find(d => d.id == y.details[i].id);
                  console.log("Detail", df)
                  infoWindow.setContent(df.address);
                  infoWindow.open(map, marker);
                }
              })(marker, i));
            }

          }
          (await loader).dismiss()
        }
        if (this.details.length < 25) {
          directionsService.route({
            origin: origin,
            destination: destination,
            waypoints: waypts,
            travelMode: google.maps.TravelMode.DRIVING
          }, async function (response, status) {
            (await loader).dismiss()
            if (status === google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
              console.log("center", center)
              console.log("Response Directions", response)
              _this.map.setCenter(center)
              if (_this.order.status_order != 25 && _this.order.status_order != 31 && _this.order.status_order != 48 && _this.order.status_order != 36) {
                _this.realtime.getFirebaseCollectionObject(`status_order_mobile/${_this.order.city_id}/${_this.order.customer_id}/${_this.order.id}`)
                  .valueChanges().subscribe((res: any) => {
                    if (res != null) {
                      if (res.status_order == 31) {
                        _this.dismiss()
                        _this.clearLocals()
                        if (this.subscription) {
                          _this.subscription.unsubscribe()
                        }
                        if (this.subscription2) {
                          _this.subscription2.unsubscribe()
                        }
                        _this.ui.presentAlert({
                          mode: 'ios',
                          header: 'Advertencia',
                          message: 'La orden ha sido cancelada por el cliente',
                          buttons: [
                            {
                              text: 'Aceptar',
                              role: 'cancel',
                              cssClass: 'secondary',
                              handler: (blah) => {

                              }
                            }
                          ]
                        })
                        return
                      }

                    }
                  })
              }
              if (_this.order.status_order != 25 && _this.order.status_order != 31) {
                _this.changeAvailability(true);
                const detail = _this.details[0];
                console.log("Routes", response.routes)
                console.log("Overview Path", response.routes[0].overview_path)
                const paths = [];
                response.routes[0].overview_path.map(l => {
                  paths.push({
                    lat: l.lat(),
                    lng: l.lng()
                  })
                })
                console.log("Path", paths)
                _this.paths = paths;
                if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
                  const latitude = localStorage.getItem("latitude");
                  const longitude = localStorage.getItem("longitude");
                  const pos_lat_lng = new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude));
                  const ordered_paths = _this.paths.sort((a, b) => {
                    return _this.place.calcCrow(a.lat, a.lng, latitude, longitude) - _this.place.calcCrow(b.lat, b.lng, latitude, longitude)
                  })
                  const net_location = _this.paths.find(p => !p.read);
                  net_location.read = true;
                  const next_lat_lng = new google.maps.LatLng(net_location.lat, net_location.lng);
                  const angle = _this.rotateMarker('assets/imgs/moto-new.svg', pos_lat_lng, next_lat_lng);
                  _this.updatePosition(_this.auth.user.id, _this.auth.vehicles.id, latitude, longitude, _this.order.id, angle);
                }

              }


            } else {


              _this.clearLocals()
              await _this.ui.presentAlert({
                mode: 'ios',
                header: 'No se ha podido mostrar el mapa',
                message: status,
                buttons: [
                  {
                    text: 'Aceptar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                      _this.dismiss()
                    }
                  },
                ]
              })
              console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);
            }
          });
        }

        //calcular distancia
        if (this.order.status_order != 25 && this.order.status_order != 31) {
          for (let i = 0; i < waypts.length; i++) {
            let a = null,
              b = null;
            if (i < waypts.length - 1) {
              a = { lat: waypts[i].location.lat, lng: waypts[i].location.lng };
            }
            let j = i + 1;
            if (j <= waypts.length - 1) {
              b = { lat: waypts[j].location.lat, lng: waypts[j].location.lng };
            }
            if (a != null && b != null) {
              this.getDistanceMatrix(a, b);
            }
          }
        }

      } catch (e) {
        (await loader).dismiss();
        // this.ui.showToast("No se pudo obtener la ubicación load MAp")
        console.log("Error", e)
        return;
      }

    } else {
      this.ui.showToast("Verifique su conexión e intentelo de nuevo", () => {
        localStorage.removeItem("current_order");
        this.clearLocals();
        this.dismiss();
      });
    }

  }

  printDirections(service_options, map) {
    const _this = this;
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
    directionsDisplay.setMap(map);
    return new Promise((resolve, reject) => {
      directionsService.route(service_options, async function (response, status) {
        // (await loader).dismiss()
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          resolve({})
          // console.log("center", center)
          // _this.map.setCenter(center)
          if (_this.order.status_order != 25 && _this.order.status_order != 31) {
            _this.changeAvailability(true);
          }


        } else {

          resolve({})
          _this.clearLocals()

          console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);
        }
      });
    })

  }

  callANumber(number) {
    clearInterval(this.positionTracking)
    console.log("Phone", number);
    this.ui.call(number);
  }

  parseFloat(long) {
    return parseFloat(long)
  }

  getDistanceMatrix(origin, destination, loader?) {
    var service = new google.maps.DistanceMatrixService();
    var _this = this;

    //calculo distancia
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    },
      async function (response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          await _this.ui.presentAlert({
            mode: 'ios',
            header: 'No se pudo mostrar el mapa, verifique su conexión y reintentelo de nuevo',
            buttons: [
              {
                text: 'Aceptar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  console.log('Confirm Cancel: blah');
                  _this.dismiss()
                }
              }
            ]
          })
          console.log("Error was: " + status);
        } else {
          try {
            const { distance, duration: dur } = response.rows[0].elements[0];
            console.log("Response", response.rows[0].elements[0])
            let distance_text = response.rows[0].elements[0].distance.text;
            console.log("Distance Text", distance_text)
            let duration = dur.value;
            _this.getCalculateDistance(distance_text, duration);

          } catch (e) {
            console.log("error", e)
          }

        }
      });
  }

  getCalculateDistance(distance, duration) {
    this.distance = distance;
    // this.duration = 0;
    const y = Number(duration);
    this.duration += duration;
    let hour;
    let minutes;
    if (this.duration >= 3600) {
      hour = (this.duration / 3600).toFixed(0);
      if ((this.duration - 3600) >= 60) {
        minutes = ((this.duration - 3600) / 60).toFixed(0);
        if (minutes > 60) {
          hour = Number(hour) + Number((minutes / 60).toFixed(0))
          minutes -= Number((minutes / 60).toFixed(0)) * 60;
        }
      } else {
        minutes = (1).toFixed(0);
      }
    } else {
      minutes = (this.duration / 60).toFixed(0)
    }
    const hour_unit = Number(hour) == 1 ? ' hora' : this.duration < 3600 ? '' : ' horas';
    const min_unit = Number(minutes) == 1 ? ' minuto' : ' minutos';
    hour = hour ? hour : ''
    this.duration_text = hour + hour_unit + " " + minutes + min_unit;

  }

  /**
   * This method is for calculate the distance between the current location 
   * and the detail is currently active
   */
  async calculateAndEndDetail(item, latitude, longitude) {
    this.detailActive.loading = true;
    this.detailActive.text_loading = "Calculando la distancia";
    let y = this.place.calcCrow(latitude, longitude, parseFloat(this.detailActive.latitude), parseFloat(this.detailActive.longitude));
    console.log("Distance", y)
    if (!this.equal_or_greater_than_a_kilometer) {
      y = (Number(y)) * 1000;
    }
    console.log("Y ", y)
    this.minimum_distance = this.minimum_distance ? this.minimum_distance : 1;
    this.detailActive.loading = false;
    this.detailActive.text_loading = "";
    if (y <= Number(this.minimum_distance)) {
      await this.ui.presentAlert({
        mode: 'ios',
        header: '¿Desea notificar que ya llegaste a este punto?',
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
              clearInterval(this.positionTracking);
              this.detailActive.loading = true;
              this.detailActive.text_loading = "Enviando la información";
              const data = new FormData();
              const latitude = localStorage.getItem("latitude")
              const longitude = localStorage.getItem("longitude")
              data.append("order_detail_id", this.detailActive.id);
              data.append("latitude", latitude)
              data.append("longitude", longitude)
              data.append("description", "El mensajero ya llegó al destino " + this.detailActive.address)
              data.append("user_id", this.auth.user.id.toString())
              this.request.post('driver/register_event', data)
                .subscribe(async (res: any) => {
                  this.detailActive.loading = false;
                  this.detailActive.text_loading = "";
                  if (this.order.diligence) {
                    this.initTimer();
                  }
                  item.ended = true;
                  //Update real time timer for the client
                  this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${this.detailActive.id}`)
                    .update({
                      ...item
                    });
                  localStorage.setItem("current_order", JSON.stringify(this.order));
                }, async (err: any) => {
                  console.log("Error", err);
                  this.detailActive.loading = false;
                  this.detailActive.text_loading = "";

                })


            }

          }
        ]
      })
    } else {
      await this.ui.presentAlert({
        mode: 'ios',
        header: 'Advertencia',
        message: 'Para poder finalizar, <br>debes estar cerca de la dirección',
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
  }

  async end(item) {
    if (this.network.getNetworkStatus().connected) {
      console.log("Detail", item)
      //Validate if the deatil isn't finished
      if (item.status != 25 && item.status != 48) {
        //The current order is a diligence?
        if (this.order.diligence) {
          //The current detail isn't ended?
          if (!this.detailActive.ended) {
            // The proxiimity is activated?
            if (this.proximity == 1) {
              let loader;
              this.detailActive.loading = true;
              this.detailActive.text_loading = "Obteniendo tu ubicación";
              //Getting the current user location
              try {
                //Get current user position
                let position
                //Validate if the user is on a mobile
                if (Capacitor.platform != 'web') {
                  //Work with background CORDOVA
                  position = await BackgroundGeolocation.getCurrentPosition({
                    timeout: 30000,
                  });
                } else {
                  //Work with Capacitot PWA
                  position = await Geolocation.getCurrentPosition({
                    timeout: 30000
                  });
                }
                this.detailActive.loading = false;
                this.detailActive.text_loading = "";

                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;


                this.latitude = latitude;
                this.longitude = longitude;
                localStorage.setItem("latitude", latitude.toString());
                localStorage.setItem("longitude", longitude.toString());
                this.calculateAndEndDetail(item, latitude, longitude);
              } catch (e) {
                this.detailActive.loading = false;
                this.detailActive.text_loading = "";

                // (await loader).dismiss();
                // this.ui.showToast("Error Geolocation" + e)
                let latitude = localStorage.getItem("latitude");
                let longitude = localStorage.getItem("longitude");
                if (latitude && longitude) {
                  this.latitude = latitude;
                  this.longitude = longitude;
                  localStorage.setItem("latitude", latitude.toString());
                  localStorage.setItem("longitude", longitude.toString());
                  this.calculateAndEndDetail(item, latitude, longitude);
                } else {
                  await this.ui.presentAlert({
                    mode: 'ios',
                    header: 'Advertencia',
                    message: 'Su ubicación no está disponible ',
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
              }
            } else {
              await this.ui.presentAlert({
                mode: 'ios',
                header: '¿Desea notificar que ya llegaste a este punto?',
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
                      clearInterval(this.positionTracking);
                      this.detailActive.loading = true;
                      this.detailActive.text_loading = "Enviando información";
                      const data = new FormData();
                      const latitude = localStorage.getItem("latitude");
                      const longitude = localStorage.getItem("latitude");
                      data.append("order_detail_id", this.detailActive.id);
                      data.append("latitude", latitude.toString())
                      data.append("longitude", longitude.toString())
                      data.append("description", "El mensajero ya llegó al destino " + this.detailActive.address)
                      data.append("user_id", this.auth.user.id.toString())
                      this.request.post('driver/register_event', data)
                        .subscribe(async (res: any) => {
                          this.detailActive.loading = false;
                          this.detailActive.text_loading = "";


                          if (this.order.diligence == 1) {
                            this.initTimer();
                          }
                          item.ended = true;
                          this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${this.detailActive.id}`)
                            .update({
                              ...item
                            });
                        }, async (err: any) => {
                          console.log("Error", err)
                          this.detailActive.loading = false;
                          this.detailActive.text_loading = "";
                        })
                    }
                  }
                ]
              })
            }
          } else {

            await this.ui.presentAlert({
              mode: 'ios',
              header: 'Finalizar',
              buttons: [
                {
                  text: 'Finalizado con éxito',
                  cssClass: 'secondary',
                  handler: (blah) => {
                    this.initTimerB = false;
                    this.sTopTimer()
                    this.endDetail(item);
                  }
                },
                {
                  text: 'El cliente no se presentó',
                  cssClass: 'secondary',
                  handler: async (blah) => {
                    if (this.m >= Number(this.order.time_wait)) {
                      this.detailActive.loading = true;
                      this.detailActive.text_loading = "Enviando información";
                      const data = new FormData();
                      data.append("order_detail_id", this.detailActive.id);
                      data.append("latitude", this.latitude.toString())
                      data.append("longitude", this.longitude.toString())
                      data.append("wait_time", this.detailActive.timer ? this.detailActive.timer.minutes ? this.detailActive.timer.minutes.toString() : (0).toString() : (0).toString());
                      data.append("surplus_money", this.detailActive.total_charge ? this.detailActive.total_charge.toString() : (0).toString())
                      data.append("description", "El cliente no se presentó " + this.detailActive.address)
                      data.append("user_id", this.auth.user.id.toString())
                      const loader = await this.ui.loading("Por favor espere...");
                      this.request.post("driver/delivery_change_order_to_ineffective", data)
                        .subscribe(async (res: any) => {
                          (await loader).dismiss();
                          this.initTimerB = false;
                          this.sTopTimer()
                          this.detailActive.loading = false;
                          this.detailActive.text_loading = "";
                          item.status = 48;
                          item.ended = true;
                          let cash = 0;
                          localStorage.setItem("current_order", JSON.stringify(this.order));
                          console.log("No effective", res)
                          if (res.data.order_no_effective || this.getOrderDetailStatusSuccessful()) {
                            await this.ui.presentAlert({
                              mode: 'ios',
                              header: 'Advertencia',
                              message: 'La orden no ha sido efectiva',
                              buttons: [
                                {
                                  text: 'Aceptar',
                                  role: 'cancel',
                                  cssClass: 'secondary',
                                  handler: (blah) => {
                                    this.clearLocals();
                                    this.dismiss();
                                  }
                                }
                              ]
                            })

                          }
                          //Update real time timer for the client
                          this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${item.id}`)
                            .update({
                              status: 48
                            });

                        }, async err => {
                          console.log("Err", err);
                          (await loader).dismiss();
                          if (err.status == 200) {
                            await this.ui.presentAlert({
                              mode: 'ios',
                              header: 'El detalle ha sido marcado como no efectivo',
                              buttons: [
                                {
                                  text: 'Aceptar',
                                  role: 'cancel',
                                  cssClass: 'secondary',
                                  handler: (blah) => {

                                  }
                                }
                              ]
                            })
                          }
                          if (err.status == 400) {
                            await this.ui.presentAlert({
                              mode: 'ios',
                              header: 'Error',
                              message: err.error.messages[0],
                              buttons: [
                                {
                                  text: 'Aceptar',
                                  role: 'cancel',
                                  cssClass: 'secondary',
                                  handler: (blah) => {

                                  }
                                }
                              ]
                            })
                          }
                        })
                    } else {

                      await this.ui.presentAlert({
                        mode: 'ios',
                        header: 'No se puede finalizar esta dirección ',
                        message: 'Al menos debe esperar ' + this.order.time_wait + ' minutos para poder finalizarlo',
                        buttons: [
                          {
                            text: 'Aceptar',
                            role: '',
                            cssClass: 'secondary',
                            handler: (blah) => {

                            }
                          }
                        ]
                      })
                    }
                  }
                },
              ]
            })

          }
        } else {
          //The current detail isn't ended?
          if (!this.detailActive.ended) {
            //The proximity is activated?
            if (this.proximity == 1) {
              this.detailActive.loading = true;
              this.detailActive.text_loading = "Obteniendo tu ubicación";
              try {
                //Get current user position
                let position;

                //Validate if the user is on a mobile
                if (Capacitor.platform != 'web') {
                  //Work with background CORDOVA
                  position = await BackgroundGeolocation.getCurrentPosition({
                    timeout: 30000,
                  });
                } else {
                  //Work with Capacitot PWA
                  position = await Geolocation.getCurrentPosition({
                    timeout: 30000
                  });
                }
                this.detailActive.loading = false;
                this.detailActive.text_loading = "";
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                this.latitude = latitude;
                this.longitude = longitude;
                localStorage.setItem("latitude", latitude.toString());
                localStorage.setItem("longitude", longitude.toString());
                this.calculateAndEndDetail(item, latitude, longitude);
              } catch (e) {

                this.detailActive.loading = false;
                this.detailActive.text_loading = "";
                let latitude = localStorage.getItem("latitude");
                let longitude = localStorage.getItem("longitude");
                if (latitude && longitude) {
                  this.latitude = latitude;
                  this.longitude = longitude;
                  localStorage.setItem("latitude", latitude.toString());
                  localStorage.setItem("longitude", longitude.toString());
                  this.calculateAndEndDetail(item, latitude, longitude);
                } else {
                  await this.ui.presentAlert({
                    mode: 'ios',
                    header: 'Advertencia',
                    message: 'Su ubicación no está disponible ',
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
              }
            } else {
              await this.ui.presentAlert({
                mode: 'ios',
                header: '¿Desea notificar que ya llegaste a este punto?',
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
                      clearInterval(this.positionTracking);
                      this.detailActive.loading = true;
                      this.detailActive.text_loading = "Enviando información";
                      const data = new FormData();
                      data.append("order_detail_id", this.detailActive.id);
                      data.append("latitude", this.latitude.toString())
                      data.append("longitude", this.longitude.toString())
                      data.append("description", "El mensajero ya llegó al destino " + this.detailActive.address)
                      data.append("user_id", this.auth.user.id.toString())
                      this.request.post('driver/register_event', data)
                        .subscribe(async (res: any) => {
                          this.detailActive.loading = false;
                          this.detailActive.text_loading = "";
                          if (this.order.diligence == 1) {
                            this.initTimer();
                          }
                          item.ended = true;
                          this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${this.detailActive.id}`)
                            .update({
                              ...item
                            });
                        }, async (err: any) => {
                          console.log("Error", err)
                          this.detailActive.loading = false;
                          this.detailActive.text_loading = "";
                        })
                    }

                  }
                ]
              })
            }
          } else {
            await this.ui.presentAlert({
              mode: 'ios',
              header: 'Finalizar',
              buttons: [
                {
                  text: 'Finalizado con éxito',
                  cssClass: 'secondary',
                  handler: (blah) => {

                    this.endDetail(item);
                  }
                },
                {
                  text: 'El cliente no se presentó',
                  cssClass: 'secondary',
                  handler: async (blah) => {
                    const data = new FormData();

                    data.append("order_detail_id", this.detailActive.id);
                    data.append("latitude", this.latitude.toString())
                    data.append("longitude", this.longitude.toString())
                    data.append("wait_time", this.detailActive.timer ? this.detailActive.timer.minutes ? this.detailActive.timer.minutes.toString() : (0).toString() : (0).toString());
                    data.append("surplus_money", this.detailActive.total_charge ? this.detailActive.total_charge.toString() : (0).toString())
                    data.append("description", "El cliente no se presentó " + this.detailActive.address)
                    data.append("user_id", this.auth.user.id.toString())
                    this.detailActive.loading = true;
                    this.detailActive.text_loading = "Enviando información";
                    this.request.post("driver/delivery_change_order_to_ineffective", data)
                      .subscribe(async (res: any) => {
                        this.detailActive.loading = false;
                        this.detailActive.text_loading = "";
                        this.initTimerB = false;
                        this.sTopTimer()

                        item.status = 48;
                        this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${item.id}`)
                          .update({
                            ...item
                          });
                        localStorage.setItem("current_order", JSON.stringify(this.order));
                        console.log("No effective", res)
                        if (res.data.order_no_effective || this.getOrderDetailStatusSuccessful()) {
                          await this.ui.presentAlert({
                            mode: 'ios',
                            header: 'Advertencia',
                            message: 'La orden no ha sido efectiva',
                            buttons: [
                              {
                                text: 'Aceptar',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                  this.clearLocals();
                                  this.dismiss();
                                }
                              }
                            ]
                          })

                        }
                      }, async err => {
                        console.log("Err", err);
                        this.detailActive.loading = false;
                        this.detailActive.text_loading = "";
                        if (err.status == 200) {
                          await this.ui.presentAlert({
                            mode: 'ios',
                            header: 'El detalle ha sido marcado como no efectivo',
                            buttons: [
                              {
                                text: 'Aceptar',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {

                                }
                              }
                            ]
                          })
                        }
                        if (err.status == 400) {
                          await this.ui.presentAlert({
                            mode: 'ios',
                            header: 'Error',
                            message: err.error.messages[0],
                            buttons: [
                              {
                                text: 'Aceptar',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {

                                }
                              }
                            ]
                          })
                        }
                      })
                  }
                },
              ]
            })
          }
        }
      } else {
        this.ui.showToast("La dirección ya está realizada en el detalle del servicio");
      }
    } else {
      this.ui.showToast("Verifique su conexión");
    }
  }

  async endTimeOrder() {
    const loader = await this.ui.loading("Por favor espere...");
    const data = new FormData();
    const latitude = localStorage.getItem("latitude");
    const longitude = localStorage.getItem("longitude");
    data.append("order_detail_id", this.detailActive.id)
    data.append("latitude", latitude.toString())
    data.append("longitude", longitude.toString())
    data.append("wait_time", this.detailActive.timer ? this.detailActive.timer.minutes ? this.detailActive.timer.minutes.toString() : (0).toString() : (0).toString());
    data.append("surplus_money", this.detailActive.total_charge ? this.detailActive.total_charge.toString() : (0).toString())
    data.append("description", "Finalización " + this.detailActive.address)
    data.append("user_id", this.auth.user.id.toString())
    this.request.post("driver/end_order_detail", data)
      .subscribe(async (res: any) => {
        (await loader).dismiss();
        this.detailActive.status = 25;
        this.initTimerB = false;
        this.sTopTimer();
        localStorage.removeItem("timer")
        localStorage.removeItem(this.keyDetail)
        localStorage.removeItem("initTimer")
        localStorage.removeItem("app_close_date")
        localStorage.removeItem("app_background_date")
        console.log("Order", this.order);
        const detail = this.order.details.find(d => d == this.detailActive);
        console.log("Detail", detail)
        localStorage.setItem("current_order", JSON.stringify(this.order));
        this.save();
      }, async (err: any) => {
        console.log("Error", err);
        (await loader).dismiss();
        if(err.status==400){
          await this.ui.presentAlert({
            mode: 'ios',
            header: err.error.messages[0],
    
            
          })
        }
        this.ui.showToast("Ha ocurrido un error")
      })
  }

  async cancel() {
    if (this.network.getNetworkStatus().connected) {

      await this.ui.presentAlert({
        mode: 'ios',
        header: '¿Estás seguro que quieres cancelar la orden?',

        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {

            }
          },
          {
            text: 'Sí',
            handler: async (blah) => {
              await this.ui.presentAlert({
                mode: 'ios',
                header: '¿Por qué desea cancelarla?',
                inputs: [
                  {
                    name: 'why',
                    id: 'paragraph',
                    type: 'textarea',
                    placeholder: 'Razón',
                    mode: 'ios'
                  },
                ],
                buttons: [
                  {
                    text: 'Enviar',
                    handler: async (res) => {
                      const latitude = localStorage.getItem("latitude");
                      const longitude = localStorage.getItem("longitude");
                      const data = new FormData();
                      const detail = this.detailActive ? this.detailActive : this.details[this.details.length - 1];
                      data.append("order_detail_id", detail.id);
                      data.append("latitude", latitude.toString())
                      data.append("longitude", longitude.toString())
                      data.append("description", res.why);
                      data.append("user_id", this.auth.user.id.toString())
                      const loader = await this.ui.loading("Por favor espere...");
                      this.request.post('driver/delivery_cancel_order', data).subscribe(async res => {
                        (await loader).dismiss();
                        this.order.status_order = 25;
                        localStorage.removeItem("current_order");
                        this.clearLocals()
                        if (this.subscription) {
                          this.subscription.unsubscribe();
                        }
                        if (this.subscription2) {
                          this.subscription2.unsubscribe();
                        }
                        this.dismiss();
                      }, async err => {
                        (await loader).dismiss();

                        await this.ui.presentAlert({
                          mode: 'ios',
                          header: 'No se ha podido cancelar la orden',
                          buttons: [{
                            text: "Aceptar",
                            role: 'cancel',
                            handler: () => {

                            }
                          }]
                        })
                      })
                    }
                  },
                ]
              })
            }
          },
        ]
      })
    } else {
      this.ui.showToast("Verifique su conexión")
    }
  }


  async endDetail(item) {

    if (this.network.getNetworkStatus().connected) {
      this.detailActive.loading = true;
      this.detailActive.text_loading = "Enviando información";
      const data = new FormData();
      data.append("order_detail_id", item.id)
      data.append("latitude", this.latitude.toString())
      data.append("longitude", this.longitude.toString())
      data.append("wait_time", this.detailActive.timer ? this.detailActive.timer.minutes ? this.detailActive.timer.minutes.toString() : (0).toString() : (0).toString());
      data.append("surplus_money", this.detailActive.total_charge ? this.detailActive.total_charge.toString() : (0).toString())
      data.append("description", "Finalización " + item.address)
      data.append("user_id", this.auth.user.id.toString())
      this.request.post("driver/end_order_detail", data)
        .subscribe(async (res: any) => {
          this.detailActive.loading = false;
          this.detailActive.text_loading = "";
          //Update real time timer for the client
          this.realtime.getFirebaseCollection(`order_detail_report/${this.order.id}/${this.detailActive.id}`)
            .update({
              ...item,
              status: 25
            });
          item.status = 25;

          this.initTimerB = false;
          this.sTopTimer();

          localStorage.removeItem("timer")
          localStorage.removeItem(this.keyDetail)
          localStorage.removeItem("initTimer")
          localStorage.removeItem("app_close_date")
          localStorage.removeItem("app_background_date")
          console.log("Order", this.order);
          const detail = this.order.details.find(d => d == item);
          console.log("Detail", detail)
          if (this.order.zapp_store_order == 1) {
            this.order.status_order = 54;
          }
          localStorage.setItem("current_order", JSON.stringify(this.order));
          if (this.getOrderDetailStatusSuccessful()) {
            if (this.order.zapp_store_order == 1) {
              this.order.status_order = 55;
            }
            localStorage.setItem("current_order", JSON.stringify(this.order));
            const amount_to_pay = this.order.payment_method.toLowerCase() == 'efectivo' ? this.order.zapp_store_order == 1 ? Number(this.order.total_zapp_store) : Number(this.order.total) : 0;

            let message = "Método de pago: <strong>" + (this.order.payment_method) + "</strong>"
            let cash = 0;
            if (this.order.payment_method.toLowerCase() == 'masivo') {
              let details: any[] = this.order.details ? this.order.details : this.order.detail;

              details.forEach(d => {
                cash += d.declared_value ? d.declared_value : 0;
              })
              message += "<br> Valor del servicio: <strong>$" + (cash) + "</strong> <br>"
            } else {
              message += "<br> Valor del servicio: <strong>$" + (amount_to_pay) + "</strong> <br>"
            }
            let wait_time = 0;
            let total_charge = 0;
            if (this.order.details) {
              this.order.details.map(d => {
                wait_time += d.wait_time ? Number(d.wait_time) : 0;
                total_charge += d.total_charge ? Number(d.total_charge) : 0;
              });
            } else {
              this.order.detail.map(d => {
                wait_time += d.wait_time ? Number(d.wait_time) : 0;
                total_charge += d.total_charge ? Number(d.total_charge) : 0;
              });
            }
            if (total_charge > 0) {
              message += " Tiempo de espera : <strong>$" + (total_charge) + "</strong> <br>"
            }
            total_charge = Number(total_charge);
            const total = Number(amount_to_pay + total_charge + cash);
            message += "Total a pagar : <strong>$" + total + "</strong>";
            await this.ui.presentAlert({
              mode: 'ios',
              header: '¡Tu viaje ha finalizado!',
              message,
              backdropDismiss: false,
              buttons: [
                {
                  text: 'Aceptar',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                    if (this.order.service_type_id != 3) {
                      this.save();
                    } else {
                      this.order.status_order = 25;
                      localStorage.removeItem("current_order");
                      this.clearLocals();
                      this.dismiss();
                    }
                  }
                },
              ]
            })

          } else {

            await this.ui.presentAlert({
              mode: 'ios',
              header: '¡Acción Completada!',
              message: item.address,
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
        }, async (err: any) => {
          console.log("Error", err);
          this.detailActive.loading = false;
          this.detailActive.text_loading = "";
          if (err.status == 400) {
            this.ui.showToast("Ha ocurrido un error " + err.error.messages[0])
            return;
          }

        })
    } else {
      this.ui.showToast("Verifique su conexión")
    }
  }


  async viewEvent(order) {
    clearInterval(this.positionTracking)
    if (this.network.getNetworkStatus().connected) {
      const modal = await this.ui.presentModal(EventsPage, {
        order,
        latitude: this.latitude,
        longitude: this.longitude
      })
      const m = await modal.onDidDismiss();
      if (!this.view_more && this.order.status_order != 25) {
        // this.changeAvailability()
      }
    } else {
      this.ui.showToast("Verifique su conexión");
    }
  }

  getOrderDetailStatusSuccessful() {
    if (this.order.details) {
      return this.order.details.every(d => d.status == 25 || d.status == 48);
    }
    return this.order.detail.every(d => d.status == 25 || d.status == 48);
  }

  async save() {
    if (this.getOrderDetailStatusSuccessful()) {
      console.log("Id", this.order.id)
      if (this.network.getNetworkStatus().connected) {
        const data = new FormData();
        // this.ui.showToast("Latitude " + this.latitude + " Longitud" + this.longitude)
        let wait_time = 0;
        let total_charge = 0;
        this.order.details.map(d => {
          wait_time += d.wait_time ? Number(d.wait_time) : 0;
          total_charge += d.total_charge ? Number(d.total_charge) : 0;
        });
        const latitude = localStorage.getItem("latitude");
        const longitude = localStorage.getItem("longitude");
        data.append("order_id", this.order.id)
        data.append("latitude", latitude.toString())
        data.append("longitude", longitude.toString())
        data.append("description", "Finalización Servicio");
        data.append("user_id", this.auth.user.id.toString())
        data.append("wait_time", wait_time.toString());
        data.append("surplus_money", total_charge.toString())
        const loader = this.ui.loading("Por favor espere...");
        this.request.post("driver/end_service", data).subscribe(
          async (res: any) => {
            (await loader).dismiss();
            clearInterval(this.positionTracking);
            this.order.status_order = 25;
            localStorage.setItem('end_order_id', String(this.order.id));
            // localStorage.removeItem("latitude");
            // localStorage.removeItem("longitude");
            localStorage.removeItem("current_order");
            this.clearLocals()
            this.ui.showToast("Orden finalizada.", () => {
              this.dismiss()
              if (this.order.zapp_store_order == 1) {
                const obj = {
                  data: {
                    status: "completed"
                  }
                }
                //?option=update_order&id=2638
                //wc_order_id
                this.request
                  .post(`?option=update_order&id=${this.order.wc_order_id}`, obj, true)
                  .subscribe((res: any) => {
                    console.log("Res", res)
                  }, err => {
                    if (err.status == 400) {
                      this.ui.showToast(err.error.message)
                    }
                  })
              }
            })
          }, async (err: any) => {
            console.log("Error", err);
            (await loader).dismiss();
            this.ui.showToast(err.error.messages[0])
          })
      } else {
        this.ui.showToast("Verifique su conexión")
      }
    } else {
      this.ui.showToast("Debe finalizar cada una de las direcciones antes de finalizar la orden")
    }
  }

  startWatchingPosition(mode?) {
    // if (this.auth.user.available != 0) {
    //   if (Capacitor.platform !== 'web') {
    //     // this.backgroundMode.isScreenOff((status) => {
    //     //   if (status) {
    //     //     if (this.auth.user != null && this.auth.user.available != 0) {
    //     //       this.backgroundMode.wakeUp()
    //     //     }
    //     //   }
    //     // })
    //   }
    //   this.id = Geolocation.watchPosition({
    //     // enableHighAccuracy: true
    //   }, async (position, err) => {

    //     if (!err) {
    //       const prev_latitude = this.latitude;
    //       const prev_longitude = this.longitude;
    //       localStorage.setItem("latitude", position.coords.latitude.toString());
    //       localStorage.setItem("longitude", position.coords.longitude.toString());
    //       this.details.shift();
    //       this.details.unshift({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //       });
    //       this.latitude = position.coords.latitude;
    //       this.longitude = position.coords.longitude;
    //       localStorage.setItem("latitude", position.coords.latitude.toString());
    //       localStorage.setItem("longitude", position.coords.longitude.toString());
    //       // find address from lat lng
    //       //check if the network is available
    //       console.log("GPS", position.coords);

    //       this.latitude = position.coords.latitude.toString();
    //       this.longitude = position.coords.longitude.toString();
    //       console.log("Latitude 2", this.latitude)
    //       console.log("Longitud 2", this.longitude);
    //       this.details.shift();
    //       this.details.unshift({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //       })

    //       console.log("Marker Points", this.markerPoints)
    //       // this.map.setCenter({ lat: parseFloat(this.details[0].latitude), lng: parseFloat(this.details[0].longitude) },)

    //       let latlng = new google.maps.LatLng(parseFloat(this.latitude), parseFloat(this.longitude))
    //       let prev_lat_lng = new google.maps.LatLng(parseFloat(prev_latitude), parseFloat(prev_longitude));
    //       console.log("Prev latitude", prev_latitude, "Prev longitude", prev_longitude)
    //       console.log("latitude", this.latitude, "longitude", this.longitude)

    //       var marker_icon = {
    //         url: this.markers[0], // url
    //         scaledSize: new google.maps.Size(35, 50), // size
    //         // origin: new google.maps.Point(0, 0), // origin
    //         // anchor: new google.maps.Point(0, 0) // anchor 
    //       };
    //       this.markerPoints[0].setPosition(latlng);

    //       const url = "img[src='" + this.markers[0] + "']";
    //       console.log("Url", url)
    //       const y: any = document.querySelectorAll(url);
    //       const marker_div: any = document.querySelector(url)
    //       console.log("img", marker_div)
    //       const ordered_paths = this.paths.sort((a, b) => {
    //         return this.place.calcCrow(a.lat, a.lng, position.coords.latitude, position.coords.longitude) - this.place.calcCrow(b.lat, b.lng, position.coords.latitude, position.coords.longitude)
    //       })
    //       const net_location = this.paths.find(p => !p.read);
    //       net_location.read = true;
    //       const next_lat_lng = new google.maps.LatLng(net_location.lat, net_location.lng);
    //       const heading = position.coords.heading ? position.coords.heading : 0;

    //       if(localStorage.getItem("bearing")){
    //         const bearing= localStorage.getItem("bearing");
    //         localStorage.setItem("bearing_used", bearing);
    //       }
    //       localStorage.setItem("bearing", heading.toString())
    //       const angle = this.rotateMarker(this.markers[0], prev_lat_lng, latlng, heading);


    //       this.updatePosition(this.auth.user.id, this.auth.vehicles.id, position.coords.latitude, position.coords.longitude, this.order.id, angle)
    //       // Haptics.vibrate()  

    //       if (localStorage.getItem("current_order")) {
    //         const order = JSON.parse(localStorage.getItem("current_order"));
    //         if (order) {
    //           let path = 'order_gps/' + order.id + '/' + this.auth.user.id;
    //           this.db.object(path).update({
    //             order: order.id,
    //             key: this.auth.user.id,
    //             vehicleId: this.auth.vehicles.id,
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude,
    //             oldLat: position.coords.latitude,
    //             oldLng: position.coords.longitude,
    //             // last_active: Date.now(),
    //             code: environment.VERSION_NAME
    //           });
    //           this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id)
    //             .valueChanges().pipe(take(1)).subscribe((value: any) => {
    //               // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
    //               if (value === null) {
    //                 const locations = [{
    //                   lat: position.coords.latitude, lng: position.coords.longitude, created_at: Date.now()
    //                 }]
    //                 // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
    //                 this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id).set({
    //                   order,
    //                   key: this.auth.user.id,
    //                   user_id: this.auth.user.id,
    //                   locations,
    //                   code: environment.VERSION_NAME
    //                 });

    //               } else {
    //                 // update
    //                 let locations: any[] = value.locations;
    //                 locations.push({
    //                   lat: position.coords.latitude, lng: position.coords.longitude, created_at: Date.now()
    //                 })
    //                 this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id)
    //                   .update({
    //                     order,
    //                     key: this.auth.user.id,
    //                     locations,
    //                     code: environment.VERSION_NAME
    //                   });
    //               }
    //             })
    //         }
    //       }
    //     } else {
    //       // this.ui.showToast("Entré en el error watch position" + err);
    //       await Geolocation.clearWatch({ id: this.id });
    //       this.startWatchingPosition();

    //       if (Capacitor.platform !== 'web') {
    //         await this.backgroundGeolocation.removeAllListeners();
    //       }
    //       this.initializeBackgroundGeolocation()
    //     }
    //   });
    // }
    // setTimeout(async () => {
    //   await Geolocation.clearWatch({ id: this.id });
    //   this.startWatchingPosition();
    //   if (Capacitor.platform !== 'web') {
    //     await this.backgroundGeolocation.removeAllListeners();
    //   }
    //   this.initializeBackgroundGeolocation()
    // }, 240000)
  }



  async initializeBackgroundGeolocation() {
    // if (this.auth.user.available != 0) {
    //   if (Capacitor.platform !== 'web') {

    //     const config: BackgroundGeolocationConfig = {
    //       desiredAccuracy: 10,
    //       stationaryRadius: 2,
    //       distanceFilter: 1,
    //       // startOnBoot: true,
    //       debug: false, //  enable this hear sounds for background-geolocation life-cycle.
    //       stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    //     };

    //     this.backgroundGeolocation.configure(config)
    //       .then(() => {
    //         this.backgroundGeolocation.on(BackgroundGeolocationEvents.location)
    //           .subscribe((location: BackgroundGeolocationResponse) => {
    //             console.log(location);

    //             const prev_latitude = localStorage.getItem("latitude");
    //             const prev_longitude = localStorage.getItem("longitude");
    //             // Haptics.vibrate()
    //             localStorage.setItem("latitude", location.latitude.toString());
    //             localStorage.setItem("longitude", location.longitude.toString());

    //             this.realtime.getUserGeolocation().update({
    //               key: this.auth.user.id,
    //               user_id: this.auth.user.id,
    //               latitude: location.latitude.toString(),
    //               longitude: location.longitude.toString(),
    //               city_id: this.auth.person.city_id,
    //               state_id: Number(this.auth.person.state_id),
    //               level_id : Number(this.auth.user.level_id),
    //               // last_active: Date.now(),
    //               available: this.auth.user.available,
    //               driver_name: this.auth.user.name,
    //               transport_type_id: this.auth.vehicles.transport_type_id,
    //             });
    //             const latitude = localStorage.getItem("latitude");
    //             const longitude = localStorage.getItem("longitude");
    //             const lat_lng = new google.maps.LatLng(parseFloat(prev_latitude), parseFloat(prev_longitude));
    //             const pos_lat_lng = new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude));
    //             this.markerPoints[0].setPosition(pos_lat_lng);
    //             const ordered_paths = this.paths.sort((a, b) => {
    //               return this.place.calcCrow(a.lat, a.lng, latitude, longitude) - this.place.calcCrow(b.lat, b.lng, latitude, longitude)
    //             })
    //             const net_location = this.paths.find(p => !p.read);
    //             net_location.read = true;
    //             const next_lat_lng = new google.maps.LatLng(net_location.lat, net_location.lng);
    //             const bearing_ = location.bearing ? location.bearing : 0
    //             if(localStorage.getItem("bearing")){
    //               const bearing= localStorage.getItem("bearing");
    //               localStorage.setItem("bearing_used", bearing);
    //             }
    //             localStorage.setItem("bearing", bearing_.toString())
    //             const angle = this.rotateMarker(this.markers[0], lat_lng, pos_lat_lng, bearing_);
    //             this.updatePosition(this.auth.user.id, this.auth.vehicles.id, location.latitude, location.longitude, this.order.id, angle)

    //             // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
    //             // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
    //             // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
    //             this.backgroundGeolocation.finish(); // FOR IOS ONLY
    //           });

    //       });


    //     // start recording location
    //     this.backgroundGeolocation.start();


    //     setTimeout(async () => {


    //       // if(this.backgroundGeolocation.c)
    //       this.backgroundGeolocation.removeAllListeners()
    //       this.initializeBackgroundGeolocation()
    //     }, 240000)
    //   }
    // }
  }

  rotateMarker(url_image, prev_position, position, angle_to_rotate?) {
    const url = `img[src='${url_image}']`;
    console.log("Url", url)
    const y: any = document.querySelectorAll(url);
    const marker_div: any = document.querySelector(url)
    console.log("img", marker_div)
    let angle = 0
    if (y[0]) { // when it hasn't loaded, it's null
      console.log("Encontrado Marker")
      if (typeof angle_to_rotate == 'undefined') {
        const angle = google.maps.geometry.spherical.computeHeading(prev_position, position)

        const actual_angle = angle - 180
        console.log("Angle", angle)
        console.log("Actual Angle", actual_angle)
        y[0].style.transform = `rotate(${actual_angle}deg)`
        return actual_angle;
      } else {
        let bearing = 0;
        if (localStorage.getItem("bearing_used")) {
          bearing = parseFloat(localStorage.getItem("bearing_used"))
        } else {
          bearing = 180;
        }
        const actual_angle = angle_to_rotate - (bearing);
        y[0].style.transform = `rotate(${actual_angle}deg)`
        return actual_angle
      }
    } else {
      console.log("Image Angle Not Found")
    }
    return angle
  }

  async changeAvailability(firstTime) {
    // clearInterval(this.positionTracking);

    this.startWatchingPosition();
    this.initializeBackgroundGeolocation();
    Network.addListener('networkStatusChange', async (status) => {

      console.log("Network status changed", status);
      localStorage.setItem("network_status", JSON.stringify(status));
      if (status.connected) {
        Geolocation.clearWatch({ id: this.id })
        if (Capacitor.platform !== 'web') {
          // await this.backgroundGeolocation.removeAllListeners();
        }
        this.startWatchingPosition();
        this.initializeBackgroundGeolocation();
      }
    });

  }

  updatePosition(user_id, vehicleId, lat, lng, order, angle?) {
    let path = 'order_gps/' + order + '/' + user_id;
    this.subscription = this.db.object(path).valueChanges().pipe(take(1))
      .subscribe((snapshot: any) => {
        if (localStorage.getItem("current_order")) {
          console.log("Este es el console.log de update position")
          if (this.network.getNetworkStatus().connected) {
            if (snapshot === null) {
              const obj_create = {
                order,
                key: user_id,
                vehicleId,
                lat,
                lng,
                oldLat: lat,
                oldLng: lng,
                angle,
                // last_active: Date.now(),
                code: environment.VERSION_NAME
              }
              if (typeof angle != 'undefined') {
                obj_create.angle = angle;
              }
              this.db.object(path).set(obj_create);

            } else {
              // update
              const obj_update: any = {
                order,
                key: user_id,
                vehicleId,
                lat,
                lng,
                oldLat: snapshot.lat,
                oldLng: snapshot.lng,

                // last_active: Date.now(),
                code: environment.VERSION_NAME
              }
              if (typeof angle != 'undefined') {
                obj_update.angle = angle;
              }
              this.db.object(path).update(obj_update);
            }
          } else {

          }
        } else {
          this.subscription.unsubscribe();
        }

        console.log(snapshot);
        // insert if not exists

      });

    this.subscription2 = this.realtime.getFirebaseCollectionObject('order_history_reports/' + order + '/' + user_id)
      .valueChanges().pipe(take(1)).subscribe((value: any) => {
        // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
        if (localStorage.getItem("current_order")) {
          if (value === null) {
            const locations = [{
              lat, lng, created_at: Date.now()
            }]
            // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
            this.realtime.getFirebaseCollectionObject('order_history_reports/' + order + '/' + user_id).set({
              order,
              key: user_id,
              user_id,
              locations,
              code: environment.VERSION_NAME
            });

          } else {
            // update
            let locations: any[] = value.locations;
            locations.push({
              lat, lng, created_at: Date.now()
            })
            this.realtime.getFirebaseCollectionObject('order_history_reports/' + order + '/' + user_id).update({
              order,
              key: user_id,
              locations,
              code: environment.VERSION_NAME
            });
          }
        } else {
          this.subscription2.unsubscribe()
        }

      })

  }



}


