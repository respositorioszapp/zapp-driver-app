import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import {AplicationPipeModuleModule} from '../../../modules/aplication-pipe-module/aplication-pipe-module.module'
import { OrderComponent } from 'src/app/components/order/order.component';
import { CommonComponentsModule } from 'src/app/modules/common-components/common-components.module';
import { ViewDetailPage } from '../../forms/view-detail/view-detail.page';
import { ViewDetailPageModule } from '../../forms/view-detail/view-detail.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CommonComponentsModule,
    AplicationPipeModuleModule,
    ViewDetailPageModule
  ],
  declarations: [HomePage, ],
  entryComponents: [
    OrderComponent,
    
  ]
})
export class HomePageModule {}
