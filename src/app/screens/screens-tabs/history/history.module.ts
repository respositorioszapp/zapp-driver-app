import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { AplicationPipeModuleModule } from 'src/app/modules/aplication-pipe-module/aplication-pipe-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule, 
    AplicationPipeModuleModule
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
