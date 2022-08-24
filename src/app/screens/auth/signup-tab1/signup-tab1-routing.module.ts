import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupTab1Page } from './signup-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: SignupTab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupTab1PageRoutingModule {}
