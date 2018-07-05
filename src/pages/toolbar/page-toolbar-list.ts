import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// toolbars
import { BasicPage as ToolbarBasicPage } from './basic/pages';
import { ButtonsPage as ToolbarButtonsPage } from './buttons/pages';
import { ColorsPage as ToolbarColorsPage } from './colors/pages';

import { SearchbarPage as ToolbarSearchbarPage } from './searchbar/pages';
import { SegmentPage as ToolbarSegmentPage } from './segment/pages';

@Component({
  selector: 'page-toolbar-list',
  templateUrl: 'page-toolbar-list.html'
})

export class ToolbarsListPage {
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
        title: 'Basic Usage', component: ToolbarBasicPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Changing the Color', component: ToolbarColorsPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Buttons in Toolbar', component: ToolbarButtonsPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Segment in Toolbar', component: ToolbarSegmentPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Searchbar in Toolbar', component: ToolbarSearchbarPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      }
    );
  }


  itemTapped(event, item) {

    this.navCtrl.push(item.component);
  }
}
