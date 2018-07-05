import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// alerts
// buttons
import { BasicPage as ButtonBasicPage } from './basic/pages';
import { BlockPage as ButtonBlockPage } from './block/pages';
import { ClearPage as ButtonClearPage } from './clear/pages';
import { ComponentsPage as ButtonComponentsPage } from './components/pages';
import { FullPage as ButtonFullPage } from './full/pages';
import { IconsPage as ButtonIconsPage } from './icons/pages';
import { OutlinePage as ButtonOutlinePage } from './outline/pages';
import { RoundPage as ButtonRoundPage } from './round/pages';
import { SizesPage as ButtonSizesPage } from './sizes/pages';

@Component({
  selector: 'page-buttons-list',
  templateUrl: 'page-buttons-list.html'
})
export class ButtonsListPage {
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
        title: 'Basic', component: ButtonBasicPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Block', component: ButtonBlockPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Clear', component: ButtonClearPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Button Components', component: ButtonComponentsPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Full', component: ButtonFullPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Icons', component: ButtonIconsPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Outline', component: ButtonOutlinePage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Round', component: ButtonRoundPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Sizes', component: ButtonSizesPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      }
    );
  }


  itemTapped(event, item) {

    this.navCtrl.push(item.component);
  }
}
