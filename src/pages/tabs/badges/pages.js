import { Component } from '@angular/core';
var TabBadgesContent = (function () {
    function TabBadgesContent() {
    }
    TabBadgesContent.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n"
                },] },
    ];
    /** @nocollapse */
    TabBadgesContent.ctorParameters = function () { return []; };
    return TabBadgesContent;
}());
export { TabBadgesContent };
var BadgesPage = (function () {
    function BadgesPage() {
        this.rootPage = TabBadgesContent;
    }
    BadgesPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'template.html'
                },] },
    ];
    /** @nocollapse */
    BadgesPage.ctorParameters = function () { return []; };
    return BadgesPage;
}());
export { BadgesPage };
//# sourceMappingURL=pages.js.map