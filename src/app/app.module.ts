import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment.prod';
import {AplicationPipeModuleModule} from './modules/aplication-pipe-module/aplication-pipe-module.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';

import { CommonComponentsModule } from './modules/common-components/common-components.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { WrapNamePipe } from './pipes/wrap-name.pipe';

import { AuthInterceptor } from './inteceptors/auth.interceptor';
import { ForegroundService } from '@ionic-native/foreground-service/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

// import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { Diagnostic } from '@ionic-native/diagnostic/ngx';



@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, 
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserModule, 
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonComponentsModule,
    AplicationPipeModuleModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CallNumber,
    ForegroundService,
    // BackgroundGeolocation,
    File,
    FileTransfer,
    InAppBrowser,
    FileOpener,
    Diagnostic
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
