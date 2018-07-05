import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
var BasicPage = (function () {
    function BasicPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    BasicPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'Mmmm, buttered toast',
            duration: 2000,
            position: position
        });
        toast.present(toast);
    };
    BasicPage.prototype.showToastWithCloseButton = function () {
        var toast = this.toastCtrl.create({
            message: 'Your files were successfully saved',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    BasicPage.prototype.showLongToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
            duration: 2000,
        });
        toast.present();
    };
    BasicPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'template.html'
                },] },
    ];
    /** @nocollapse */
    BasicPage.ctorParameters = function () { return [
        { type: ToastController, },
    ]; };
    return BasicPage;
}());
export { BasicPage };
//# sourceMappingURL=pages.js.map