import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleInformationPageRoutingModule } from './vehicle-information-routing.module';

import { VehicleInformationPage } from './vehicle-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VehicleInformationPageRoutingModule
  ],
  declarations: [VehicleInformationPage]
})
export class VehicleInformationPageModule {}
