import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupTab2PageRoutingModule } from './signup-tab2-routing.module';

import { SignupTab2Page } from './signup-tab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupTab2PageRoutingModule
  ],
  declarations: [SignupTab2Page]
})
export class SignupTab2PageModule {}
