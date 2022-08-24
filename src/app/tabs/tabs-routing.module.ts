import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../screens/screens-tabs/home/home.module').then(m => m.HomePageModule),
        canActivate : [AuthGuard],
        
      },
      
      {
        path: 'profile',
        loadChildren: () => import('../screens/screens-tabs/profile/profile.module').then(m => m.ProfilePageModule),
        canActivate : [AuthGuard],
          
      },
      {
        path: 'documents',
        loadChildren: () => import('../screens/screens-tabs/documents/documents.module').then(m => m.DocumentsPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'personal-information',
        loadChildren: () => import('../screens/screens-tabs/personal-information/personal-information.module').then(m => m.PersonalInformationPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'vehicle-information',
        loadChildren: () => import('../screens/screens-tabs/vehicle-information/vehicle-information.module').then(m => m.VehicleInformationPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'change-passwsord',
        loadChildren: () => import('../screens/screens-tabs/change-password/change-password.module').then(m => m.ChangePasswordPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'history',
        loadChildren: () => import('../screens/screens-tabs/history/history.module').then(m => m.HistoryPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'about',
        loadChildren: () => import('../screens/screens-tabs/about/about.module').then( m => m.AboutPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'liquidation',
        loadChildren: () => import('../screens/screens-tabs/liquidation/liquidation.module').then( m => m.LiquidationPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
