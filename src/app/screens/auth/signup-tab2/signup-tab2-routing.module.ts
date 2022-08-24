import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupTab2Page } from './signup-tab2.page';

const routes: Routes = [
  {
    path: '',
    component: SignupTab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupTab2PageRoutingModule {}
