import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquidationPage } from './liquidation.page';

const routes: Routes = [
  {
    path: '',
    component: LiquidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquidationPageRoutingModule {}
