import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from 'src/app/components/order/order.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { IonicModule } from '@ionic/angular';
import { AplicationPipeModuleModule } from '../aplication-pipe-module/aplication-pipe-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderCardComponent } from 'src/app/components/order-card/order-card.component';



@NgModule({
  declarations: [OrderComponent, CommentComponent, OrderCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AplicationPipeModuleModule
  ],
  exports :[OrderComponent, CommentComponent,OrderCardComponent],
})
export class CommonComponentsModule { }
