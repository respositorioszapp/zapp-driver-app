import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { StorageService } from "./storage.service";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RealtimeService {
  appsRef: AngularFireObject<any>;

  constructor(
    public db: AngularFireDatabase,
    private storage: StorageService,
    private auth: AuthService,

  ) { }

  getFirebaseCollection(path){
          
    return this.db.object(path) ; 
  }

  getFirebaseCollectionObject(path){
    return this.db.object(path) ; 
  }

  getFirebaseCollectionList(path){
    return this.db.list(path) ; 
  }

  getMassivesOrders(){
    //massive_new_order
    console.log("Root", `massive_new_order/${this.auth.person.city_id}/${this.auth.user.id}`);
    return this.getFirebaseCollection(`massive_new_order/${this.auth.person.city_id}/${this.auth.user.id}`);
  }

  getStatus() {
    return this.db.object(`status_user/${this.auth.user.id}`)
  }

  getNewOrder() {
    console.log(`new_orders/${this.auth.person.city_id}/${this.auth.user.id}`);
    this.appsRef = this.db.object(`new_orders/${this.auth.person.city_id}/${this.auth.user.id}`)
    return this.appsRef;
  }

  getUserGeolocation(){
    console.log(`driver_geolocation/${this.auth.person.city_id}/${this.auth.user.id}`)
    return this.db.object(`driver_geolocation/${this.auth.person.city_id}/${this.auth.user.id}`);
  }
}
