import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    </ion-content>
`})
export class TabBasicContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  templateUrl: 'template.html'
})
export class BasicPage {
  rootPage = TabBasicContentPage;
  constructor() {

  }

}
