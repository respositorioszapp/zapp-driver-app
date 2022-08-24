import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestLocationPermissionPageRoutingModule } from './request-location-permission-routing.module';

import { RequestLocationPermissionPage } from './request-location-permission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestLocationPermissionPageRoutingModule
  ],
  declarations: [RequestLocationPermissionPage]
})
export class RequestLocationPermissionPageModule {}
