import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherDocumentsPageRoutingModule } from './other-documents-routing.module';

import { OtherDocumentsPage } from './other-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OtherDocumentsPageRoutingModule
  ],
  declarations: [OtherDocumentsPage]
})
export class OtherDocumentsPageModule {}
