/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/toolbar/toolbar-header";
import * as i2 from "ionic-angular/config/config";
import * as i3 from "ionic-angular/navigation/view-controller";
import * as i4 from "../../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i5 from "ionic-angular/components/toolbar/navbar";
import * as i6 from "ionic-angular/components/app/app";
import * as i7 from "ionic-angular/navigation/nav-controller";
import * as i8 from "../../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i9 from "ionic-angular/components/button/button";
import * as i10 from "ionic-angular/components/menu/menu-toggle";
import * as i11 from "ionic-angular/components/app/menu-controller";
import * as i12 from "ionic-angular/components/toolbar/toolbar-item";
import * as i13 from "ionic-angular/components/toolbar/toolbar";
import * as i14 from "ionic-angular/components/icon/icon";
import * as i15 from "../../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i16 from "ionic-angular/components/toolbar/toolbar-title";
import * as i17 from "../../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i18 from "ionic-angular/components/content/content";
import * as i19 from "ionic-angular/platform/platform";
import * as i20 from "ionic-angular/platform/dom-controller";
import * as i21 from "ionic-angular/platform/keyboard";
import * as i22 from "./pages";
import * as i23 from "ionic-angular/components/toast/toast-controller";
var styles_BasicPage = [];
var RenderType_BasicPage = i0.ɵcrt({ encapsulation: 2, styles: styles_BasicPage, data: {} });
export { RenderType_BasicPage as RenderType_BasicPage };
export function View_BasicPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 19, "ion-header", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i1.Header, [i2.Config, i0.ElementRef, i0.Renderer, [2, i3.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(3, 0, null, null, 15, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i4.View_Navbar_0, i4.RenderType_Navbar)), i0.ɵdid(4, 49152, null, 0, i5.Navbar, [i6.App, [2, i3.ViewController], [2, i7.NavController], i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵeld(5, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 7).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_Button_0, i8.RenderType_Button)), i0.ɵdid(6, 1097728, [[1, 4]], 0, i9.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], null, null), i0.ɵdid(7, 1064960, null, 0, i10.MenuToggle, [i11.MenuController, [2, i3.ViewController], [2, i9.Button], [2, i5.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(8, 16384, null, 1, i12.ToolbarItem, [i2.Config, i0.ElementRef, i0.Renderer, [2, i13.Toolbar], [2, i5.Navbar]], null, null), i0.ɵqud(603979776, 1, { _buttons: 1 }), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵeld(11, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(12, 147456, null, 0, i14.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n        "])), (_l()(), i0.ɵeld(15, 0, null, 3, 2, "ion-title", [], null, null, null, i15.View_ToolbarTitle_0, i15.RenderType_ToolbarTitle)), i0.ɵdid(16, 49152, null, 0, i16.ToolbarTitle, [i2.Config, i0.ElementRef, i0.Renderer, [2, i13.Toolbar], [2, i5.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["\n            Toast\n        "])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(21, 0, null, null, 22, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i17.View_Content_0, i17.RenderType_Content)), i0.ɵdid(22, 4374528, null, 0, i18.Content, [i2.Config, i19.Platform, i20.DomController, i0.ElementRef, i0.Renderer, i6.App, i21.Keyboard, i0.NgZone, [2, i3.ViewController], [2, i7.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵeld(24, 0, null, 1, 2, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showToast("top") !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_Button_0, i8.RenderType_Button)), i0.ɵdid(25, 1097728, null, 0, i9.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { block: [0, "block"] }, null), (_l()(), i0.ɵted(-1, 0, ["Show Toast Top Position"])), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵeld(28, 0, null, 1, 2, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showToast("middle") !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_Button_0, i8.RenderType_Button)), i0.ɵdid(29, 1097728, null, 0, i9.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { block: [0, "block"] }, null), (_l()(), i0.ɵted(-1, 0, ["Show Toast Middle Position"])), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵeld(32, 0, null, 1, 2, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showToast("bottom") !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_Button_0, i8.RenderType_Button)), i0.ɵdid(33, 1097728, null, 0, i9.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { block: [0, "block"] }, null), (_l()(), i0.ɵted(-1, 0, ["Show Toast Bottom Position"])), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵeld(36, 0, null, 1, 2, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showLongToast() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_Button_0, i8.RenderType_Button)), i0.ɵdid(37, 1097728, null, 0, i9.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { block: [0, "block"] }, null), (_l()(), i0.ɵted(-1, 0, ["Show Long Toast"])), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵeld(40, 0, null, 1, 2, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showToastWithCloseButton() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_Button_0, i8.RenderType_Button)), i0.ɵdid(41, 1097728, null, 0, i9.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { block: [0, "block"] }, null), (_l()(), i0.ɵted(-1, 0, ["Show Toast W/ Close Button"])), (_l()(), i0.ɵted(-1, 1, ["\n"]))], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 7, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 12, 0, currVal_5); var currVal_8 = ""; _ck(_v, 25, 0, currVal_8); var currVal_9 = ""; _ck(_v, 29, 0, currVal_9); var currVal_10 = ""; _ck(_v, 33, 0, currVal_10); var currVal_11 = ""; _ck(_v, 37, 0, currVal_11); var currVal_12 = ""; _ck(_v, 41, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 4)._hidden; var currVal_1 = i0.ɵnov(_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 7).isHidden; _ck(_v, 5, 0, currVal_2); var currVal_4 = i0.ɵnov(_v, 12)._hidden; _ck(_v, 11, 0, currVal_4); var currVal_6 = i0.ɵnov(_v, 22).statusbarPadding; var currVal_7 = i0.ɵnov(_v, 22)._hasRefresher; _ck(_v, 21, 0, currVal_6, currVal_7); }); }
export function View_BasicPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_BasicPage_0, RenderType_BasicPage)), i0.ɵdid(1, 49152, null, 0, i22.BasicPage, [i23.ToastController], null, null)], null, null); }
var BasicPageNgFactory = i0.ɵccf("ng-component", i22.BasicPage, View_BasicPage_Host_0, {}, {}, []);
export { BasicPageNgFactory as BasicPageNgFactory };
//# sourceMappingURL=pages.ngfactory.js.map