import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDetailPageRoutingModule } from './view-detail-routing.module';

import {AplicationPipeModuleModule} from '../../../modules/aplication-pipe-module/aplication-pipe-module.module'

import { ViewDetailPage } from './view-detail.page';

import { CommonComponentsModule } from 'src/app/modules/common-components/common-components.module';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViewDetailPageRoutingModule,
    AplicationPipeModuleModule,
    CommonComponentsModule
  ],
  providers:[
    CallNumber
  ],
  declarations: [ViewDetailPage,],
  exports : [ViewDetailPage]
})
export class ViewDetailPageModule {}
