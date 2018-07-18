import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPreview } from '@ionic-native/camera-preview';
import { HomePage } from '../pages/home/home';
 
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;
 
  constructor(platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    platform.ready().then(() => {
 
      StatusBar.styleDefault();
      splashScreen.hide();
 
      let tapEnabled: any = false;
      let dragEnabled: any = false;
      let toBack: any = true;
      let alpha = 1;
      let rect: any = {
        x: 0,
        y: 0,
        width: platform.width(),
        height: platform.height()
      };
 
      CameraPreview.startCamera(
        rect,
        'rear',
        tapEnabled,
        dragEnabled,
        toBack,
        alpha
      );
 
    });
  }
}