import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestLocationPermissionPage } from './request-location-permission.page';

const routes: Routes = [
  {
    path: '',
    component: RequestLocationPermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestLocationPermissionPageRoutingModule {}
