import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// lists
import { AvatarPage as ListAvatarPage } from './avatar/pages';
import { BasicPage as ListBasicPage } from './basic/pages';
import { DividersPage as ListDividersPage } from './dividers/pages';
import { HeadersPage as ListHeadersPage } from './headers/pages';
import { IconPage as ListIconPage } from './icon/pages';
import { InsetPage as ListInsetPage } from './inset/pages';
import { MultilinePage as ListMultilinePage } from './multiline/pages';
import { NoLinesPage as ListNoLinesPage } from './no-lines/pages';
import { SlidingPage as ListSlidingPage } from './sliding/pages';
import { ThumbnailPage as ListThumbnailPage } from './thumbnail/pages';

@Component({
  selector: 'page-lists-list',
  templateUrl: 'page-lists-list.html'
})
export class ListsListPage {
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
        title: 'Basic', component: ListBasicPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Inset', component: ListInsetPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'No Lines', component: ListNoLinesPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'List Dividers', component: ListDividersPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'List Headers', component: ListHeadersPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Icon List', component: ListIconPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Avatar List', component: ListAvatarPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Multi-line List ', component: ListMultilinePage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Sliding List ', component: ListSlidingPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Thumbnail List ', component: ListThumbnailPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      }
    );
  }


  itemTapped(event, item) {

    this.navCtrl.push(item.component);
  }
}
