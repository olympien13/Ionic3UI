import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// inputs
import { BasicPage as InputBasicPage } from './basic/pages';
import { FloatingPage as InputFloatingPage } from './floating/pages';
import { FixedInlinePage as InputFixedInlinePage } from './fixed-inline/pages';
import { InlinePage as InputInlinePage } from './inline/pages';
import { InsetPage as InputInsetPage } from './inset/pages';
import { PlaceholderPage as InputPlaceholderPage } from './placeholder/pages';
import { StackedPage as InputStackedPage } from './stacked/pages';

@Component({
  selector: 'page-inputs-list',
  templateUrl: 'page-inputs-list.html'
})
export class InputsListPage {
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
        title: 'Basic', component: InputBasicPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Floating Labels', component: InputFloatingPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Fixed Inline Labels', component: InputFixedInlinePage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Inline Labels', component: InputInlinePage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Inset Labels', component: InputInsetPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Placeholder Labels', component: InputPlaceholderPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      },
      {
        title: 'Stacked Labels ', component: InputStackedPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      }
    );
  }


  itemTapped(event, item) {

    this.navCtrl.push(item.component);
  }
}
