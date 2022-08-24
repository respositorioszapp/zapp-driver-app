import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/auth/login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'signup',
    loadChildren: () => import('./screens/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./screens/auth/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./screens/screens-tabs/home/home.module').then( m => m.HomePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/screens-tabs/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'documents',
    loadChildren: () => import('./screens/screens-tabs/documents/documents.module').then( m => m.DocumentsPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./screens/screens-tabs/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'vehicle-information',
    loadChildren: () => import('./screens/screens-tabs/vehicle-information/vehicle-information.module').then( m => m.VehicleInformationPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./screens/screens-tabs/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'view-detail',
    loadChildren: () => import('./screens/forms/view-detail/view-detail.module').then( m => m.ViewDetailPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('.//screens/forms/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('.//screens/forms/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('.//screens/forms/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'image',
    loadChildren: () => import('.//screens/forms/image/image.module').then( m => m.ImagePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./screens/screens-tabs/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'other-documents',
    loadChildren: () => import('.//screens/forms/other-documents/other-documents.module').then( m => m.OtherDocumentsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./screens/screens-tabs/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'request-location-permission',
    loadChildren: () => import('./screens/forms/request-location-permission/request-location-permission.module').then( m => m.RequestLocationPermissionPageModule)
  },
  {
    path: 'liquidation',
    loadChildren: () => import('./screens/screens-tabs/liquidation/liquidation.module').then( m => m.LiquidationPageModule)
  },
  


  

  

  




  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
