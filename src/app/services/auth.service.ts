import { Injectable } from '@angular/core';
import { RequestService } from './request.service'
import { Router } from '@angular/router';

import { Person } from '../interfaces/Person';
import { Rol } from '../interfaces/Rol';
import { Vehicle } from '../interfaces/Vehicle';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth/';
import { StorageService } from './storage.service';
import BackgroundGeolocation from 'cordova-background-geolocation-lt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  collection_id: string
  user: User;
  person: Person;
  token: string
  role: Rol
  vehicles: Vehicle
  constructor(private request: RequestService,
    private router: Router,
    private db: AngularFireDatabase, private afAuth: AngularFireAuth,
    private storage: StorageService) {
    this.setData();
  }

  login(email, password) {
    const body = { email: email, password: password };
    return this.request.post('login', body);
  }

  async setData() {
    if (localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'));
      const {
        user,
        person,
        token,
        role,
        vehicles,
        collection_id
      } = data;
      this.collection_id = collection_id;
      this.user = user;
      this.person = person;
      this.token = token;
      this.role = role;
      this.vehicles = vehicles;
    }

  }

  register(userInfo) {
    console.log(userInfo);
    return Observable.create(observer => {
      this.afAuth.createUserWithEmailAndPassword(userInfo.email, userInfo.password).then((authData: any) => {
        // update driver object
        console.log(authData);
        userInfo.uid = authData.user.uid;
        this.afAuth.currentUser.then(res => {
          res.updateProfile({
            displayName: userInfo.name,
          });
          this.db.object('drivers/' + userInfo.uid).update(userInfo);
          observer.next();
        });

      }).catch((error: any) => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }

  setVehicles(vehicles) {
    this.vehicles = { ...this.vehicles, ...vehicles };
    const data = JSON.parse(localStorage.getItem('data'));
    data.vehicles = this.vehicles;
    localStorage.setItem("data", JSON.stringify(data));
  }

  setPerson(person) {
    this.person = { ...this.person, ...person };
    const data = JSON.parse(localStorage.getItem('data'));
    data.person = this.person;
    localStorage.setItem("data", JSON.stringify(data));
  }

  setUser(user) {
    this.user = { ...this.user, ...user };
    const data = JSON.parse(localStorage.getItem('data'));
    data.user = this.user;
    localStorage.setItem("data", JSON.stringify(data));
  }

  async getFirebaseUser() {
    const user = await this.afAuth.currentUser;
  }

  async logOut() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("data");
    localStorage.removeItem("current_order")
    localStorage.removeItem("current_status")
    localStorage.removeItem("current_status")
    localStorage.removeItem("currentDocuments")
    localStorage.removeItem("longitude")
    localStorage.removeItem("latitude")
    localStorage.removeItem("watchPositionId")
    localStorage.removeItem("current_massive_order")
    //current_massive_order
    this.router.navigate(['/login']);
    this.person = null
    this.role = null
    this.token = ""
    this.user = null
    this.vehicles = null
    if(BackgroundGeolocation){
      await BackgroundGeolocation.stop()
    }

    // this.companies = null

  }

}
