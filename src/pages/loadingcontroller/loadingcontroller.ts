import { LoadingControllerPage2 } from './loadingcontroller2';
import { LoadingController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: './loadingcontroller.html'
})

export class LoadingControllerPage {
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController) { }

  presentLoadingIos() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'This is the "ios" spinner. It will dismiss after 3 seconds.',
      duration: 3000
    });

    loading.present();
  }

  presentLoadingDots() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'This is the "dots" spinner. It will dismiss after 3 seconds.',
      duration: 3000
    });

    loading.present();
  }

  presentLoadingBubbles() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'This is the "bubbles" spinner. It will dismiss after 3 seconds.',
      duration: 3000
    });

    loading.present();
  }

  presentLoadingCircles() {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: 'This is the "circles" spinner. It will dismiss after 3 seconds.',
      duration: 3000
    });

    loading.present();
  }

  presentLoadingCrescent() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'This is the "crescent" spinner. It will dismiss after 3 seconds.',
      duration: 3000
    });

    loading.present();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'This is the mode specific spinner. It will dismiss after 3 seconds.',
      duration: 3000
    });

    loading.present();
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="loading-custom-spinner-container">
          <div class="loading-custom-spinner-box"></div>
        </div>
        <div>This is a custom spinner. It will dismiss after 3 seconds.</div>`,
      duration: 3000
    });

    loading.present();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'This has no spinner, only text. It will dismiss after 3 seconds.',
      duration: 3000
    });

    loading.present();
  }

  goToPage2() {
    let loading = this.loadingCtrl.create({
      content: 'This will navigate to the next page and then dismiss after 3 seconds.'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(LoadingControllerPage2);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 4000);
  }
}