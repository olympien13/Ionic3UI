import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
var TabIconTextContentPage = (function () {
    function TabIconTextContentPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabIconTextContentPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar [color]=\"isAndroid ? 'royal' : 'primary'\">\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n"
                },] },
    ];
    /** @nocollapse */
    TabIconTextContentPage.ctorParameters = function () { return [
        { type: Platform, },
    ]; };
    return TabIconTextContentPage;
}());
export { TabIconTextContentPage };
var IconTextPage = (function () {
    function IconTextPage(platform) {
        this.rootPage = TabIconTextContentPage;
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    IconTextPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'template.html'
                },] },
    ];
    /** @nocollapse */
    IconTextPage.ctorParameters = function () { return [
        { type: Platform, },
    ]; };
    return IconTextPage;
}());
export { IconTextPage };
//# sourceMappingURL=pages.js.map