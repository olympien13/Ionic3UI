import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// tabs
import { BadgesPage as TabBadgesPage } from './badges/pages';
import { BasicPage as TabBasicPage } from './basic/pages';
import { IconPage as TabIconPage } from './icon/pages';
import { IconTextPage as TabIconTextPage } from './icon-text/pages';
var TabsListPage = (function () {
    function TabsListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        this.items.push({
            title: 'Text Tabs', component: TabBasicPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        }, {
            title: 'Icon Tabs', component: TabIconPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        }, {
            title: 'Badge Tabs', component: TabBadgesPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        }, {
            title: 'Text And Icon Tabs', component: TabIconTextPage, note: '', icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
    }
    TabsListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.component);
    };
    TabsListPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-tabs-list',
                    templateUrl: 'page-tabs-list.html'
                },] },
    ];
    /** @nocollapse */
    TabsListPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
    ]; };
    return TabsListPage;
}());
export { TabsListPage };
//# sourceMappingURL=page-tabs-list.js.map