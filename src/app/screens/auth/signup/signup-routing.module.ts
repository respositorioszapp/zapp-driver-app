import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './signup.page';


const routes: Routes = [
  {
    path: '',
    component: SignupPage,
    children : [
      {path :'', redirectTo: 'tab1', pathMatch: 'full'},
      {
        path: 'tab1',
        loadChildren: () => import('../signup-tab1/signup-tab1.module').then(m => m.SignupTab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../signup-tab2/signup-tab2.module').then(m => m.SignupTab2PageModule)
      },
      {
        path: 'forgotpassword',
        loadChildren: () => import('../forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}
