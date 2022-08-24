import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleInformationPage } from './vehicle-information.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleInformationPageRoutingModule {}
