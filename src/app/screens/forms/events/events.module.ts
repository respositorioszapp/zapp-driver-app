import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { CommonComponentsModule } from 'src/app/modules/common-components/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EventsPageRoutingModule, 
    CommonComponentsModule
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
