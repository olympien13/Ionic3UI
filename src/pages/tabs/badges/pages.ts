import { Component } from '@angular/core';


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
export class TabBadgesContent { }

@Component({
  templateUrl: 'template.html'
})
export class BadgesPage {
  rootPage = TabBadgesContent;
}
