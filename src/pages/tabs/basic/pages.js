import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
var TabBasicContentPage = (function () {
    function TabBasicContentPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabBasicContentPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n"
                },] },
    ];
    /** @nocollapse */
    TabBasicContentPage.ctorParameters = function () { return [
        { type: Platform, },
    ]; };
    return TabBasicContentPage;
}());
export { TabBasicContentPage };
var BasicPage = (function () {
    function BasicPage() {
        this.rootPage = TabBasicContentPage;
    }
    BasicPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'template.html'
                },] },
    ];
    /** @nocollapse */
    BasicPage.ctorParameters = function () { return []; };
    return BasicPage;
}());
export { BasicPage };
//# sourceMappingURL=pages.js.map