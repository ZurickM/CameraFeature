import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public cameraPreview: CameraPreview) { }

  // platform.ready().then(() => {


  //   let tapEnabled: any = false;
  //   let dragEnabled: any = false;
  //   let toBack: any = true;
  //   let alpha = 1;
  //   let rect: any = {
  //     x: 0,
  //     y: 0,
  //     width: platform.width(),
  //     height: platform.height()
  //   };

  //   this.cameraPreview.startCamera(
  //     rect,
  //     'rear',
  //     tapEnabled,
  //     dragEnabled,
  //     toBack,
  //     alpha
  //   );

  // });

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
      };

      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res)
        },
        (err) => {
          console.log(err)
        });

    })
  }


}
