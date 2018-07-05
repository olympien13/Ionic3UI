import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// cards
import { AdvancedMapPage as CardAdvancedMapPage } from './advanced-map/pages';
import { AdvancedSocialPage as CardAdvancedSocialPage } from './advanced-social/pages';
import { AdvancedWeatherPage as CardAdvancedWeatherPage } from './advanced-weather/pages';
import { BackgroundPage as CardBackgroundPage } from './background/pages';
import { BasicPage as CardBasicPage } from './basic/pages';
import { HeaderPage as CardHeaderPage } from './header/pages';
import { ImagePage as CardImagePage } from './image/pages';
import { ListPage as CardListPage } from './list/pages';

@Component({
  selector: 'page-cards-list',
  templateUrl: 'page-cards-list.html'
})
export class CardsListPage {
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
        title: 'Basic', component: CardBasicPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Card Header', component: CardHeaderPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Card Images', component: CardImagePage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Cars List', component: CardListPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Background Images', component: CardBackgroundPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Card Advanced Map', component: CardAdvancedMapPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Card Advanced Socila ', component: CardAdvancedSocialPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Card Advanced Weather', component: CardAdvancedWeatherPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      }
    );
  }


  itemTapped(event, item) {

    this.navCtrl.push(item.component);
  }
}
