import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupTab1PageRoutingModule } from './signup-tab1-routing.module';

import { SignupTab1Page } from './signup-tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupTab1PageRoutingModule
  ],
  declarations: [SignupTab1Page]
})
export class SignupTab1PageModule {}
