import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
var TabIconContentPage = (function () {
    function TabIconContentPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabIconContentPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar [color]=\"isAndroid ? 'danger' : 'primary'\">\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n"
                },] },
    ];
    /** @nocollapse */
    TabIconContentPage.ctorParameters = function () { return [
        { type: Platform, },
    ]; };
    return TabIconContentPage;
}());
export { TabIconContentPage };
var IconPage = (function () {
    function IconPage(platform) {
        this.rootPage = TabIconContentPage;
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    IconPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'template.html'
                },] },
    ];
    /** @nocollapse */
    IconPage.ctorParameters = function () { return [
        { type: Platform, },
    ]; };
    return IconPage;
}());
export { IconPage };
//# sourceMappingURL=pages.js.map