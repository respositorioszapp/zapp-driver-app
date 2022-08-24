import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiquidationPageRoutingModule } from './liquidation-routing.module';

import { LiquidationPage } from './liquidation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiquidationPageRoutingModule
  ],
  declarations: [LiquidationPage]
})
export class LiquidationPageModule {}
