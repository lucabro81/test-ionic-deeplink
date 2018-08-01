import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {InjectedService} from "../services/Injected.service";
import {MainService} from "../services/main.service";

import { MyApp } from './app.component';
import {HomePageModule} from "../pages/home/home.module";
import {Page1PageModule} from "../pages/page1/page1.module";
import {Page2PageModule} from "../pages/page2/page2.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
        MyApp
    ),
    HomePageModule,
    Page1PageModule,
    Page2PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InjectedService,
      MainService


  ]
})
export class AppModule {}
