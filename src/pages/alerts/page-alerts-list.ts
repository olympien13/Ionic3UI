import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// alerts
import { BasicPage as AlertBasicPage } from './basic/pages';
import { CheckboxPage as AlertCheckboxPage } from './checkbox/pages';
import { ConfirmPage as AlertConfirmPage } from './confirm/pages';
import { PromptPage as AlertPromptPage } from './prompt/pages';
import { RadioPage as AlertRadioPage } from './radio/pages';

@Component({
  selector: 'page-alerts-list',
  templateUrl: 'page-alerts-list.html'
})
export class AlertListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, component: any, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];

    this.items.push(
      {
        title: 'Basic', component: AlertBasicPage, note: 'Basic Alert', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'CheckboxPage', component: AlertCheckboxPage, note: 'CheckboxPage Alert', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'ConfirmPage', component: AlertConfirmPage, note: 'ConfirmPage Alert', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'PromptPage', component: AlertPromptPage, note: 'PromptPage Alert', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'RadioPage', component: AlertRadioPage, note: 'RadioPage Alert', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

  }


  itemTapped(event, item) {

    this.navCtrl.push(item.component);
  }
}
