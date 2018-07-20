import { SelectOptionsPage } from './../pages/selectoption/selectoption';
import { InfiniteScrollPage } from './../pages/infinitescroll/infinitescroll';
import { ScrollPage } from './../pages/scroll/scroll';
import { LoadingControllerPage } from './../pages/loadingcontroller/loadingcontroller';
import { ChipPage } from './../pages/chip/chip';
import { RefresherPage } from './../pages/refresher/refresher';
import { TabsListPage } from './../pages/tabs/page-tabs-list';

import { ListsListPage } from './../pages/lists/page-lists-list';
import { CardsListPage } from './../pages/cards/page-card-list';
import { ButtonsListPage } from './../pages/buttons/page-buttons-list';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { GlobalVariables } from './globals';
import { AlertListPage } from './../pages/alerts/page-alerts-list';

// action sheets
import { BasicPage as ActionSheetBasicPage } from '../pages/action-sheets/basic/pages';

// badges
import { BasicPage as BadgeBasicPage } from '../pages/badges/basic/pages';
// checkboxes
import { BasicPage as CheckboxBasicPage } from '../pages/checkboxes/basic/pages';
// datetime
import { BasicPage as DatetimeBasicPage } from '../pages/datetime/basic/pages';

// fabs
import { BasicPage as FabBasicPage } from '../pages/fabs/basic/pages';

// gestures
import { BasicPage as GestureBasicPage } from '../pages/gestures/basic/pages';

// grid
import { BasicPage as GridBasicPage } from '../pages/grid/basic/pages';

// icons
import { BasicPage as IconBasicPage } from '../pages/icons/basic/pages';

// loading
import { BasicPage as LoadingBasicPage } from '../pages/loading/basic/pages';

// menu
import { BasicPage as MenuBasicPage } from '../pages/menus/basic/pages';

// modals
import { BasicPage as ModalBasicPage } from '../pages/modals/basic/pages';

// navigation
import { BasicPage as NavigationBasicPage } from '../pages/navigation/basic/pages';

// popover
import { BasicPage as PopoverBasicPage } from '../pages/popovers/basic/pages';

// radios
import { BasicPage as RadioBasicPage } from '../pages/radios/basic/pages';

// ranges
import { BasicPage as RangeBasicPage } from '../pages/ranges/basic/pages';

// searchbar
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';

// segments
import { BasicPage as SegmentBasicPage } from '../pages/segments/basic/pages';

// selects
import { BasicPage as SelectBasicPage } from '../pages/selects/basic/pages';

// slides
import { BasicPage as SlideBasicPage } from '../pages/slides/basic/pages';

// toast
import { BasicPage as ToastBasicPage } from '../pages/toast/basic/pages';

// toggles
import { BasicPage as ToggleBasicPage } from '../pages/toggles/basic/pages';

import { Component, NgZone, ViewChild, AfterContentInit } from '@angular/core';
import { Config, Menu, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { SplashScreen } from '@ionic-native/splash-screen';
import { InputsListPage } from '../pages/inputs/page-inputs-list';
import { ToolbarsListPage } from '../pages/toolbar/page-toolbar-list';
import { SlidePage } from '../pages/slide/slide';

@Component({
  templateUrl: 'app.template.html'
})
export class MyApp implements AfterContentInit {
  isProductionMode: boolean = false;

  nextPage: any;
  currentPlatform: string = 'ios';
  currentPageIndex: number = 1;

  @ViewChild(Nav) nav: Nav;
  @ViewChild(Menu) menu: Menu;
  pages: Array<{ title: string, component: any }>;

  rootPage: any = ActionSheetBasicPage;

  animations: string[];

  constructor(public platform: Platform, public config: Config, public zone: NgZone, public globals: GlobalVariables, private nativePageTransitions: NativePageTransitions, private splashScreen: SplashScreen, public statusBar: StatusBar) {
    console.log("Entering constructor");

    this.initializeApp();

    // Let's populate this page with some filler content for funzies
    this.animations = ['ios-transitions', 'md-transition', 'wp-transition', 'curl', 'slide', 'flip',
      'fade'];

    this.pages = [



      { title: 'Action Sheets', component: ActionSheetBasicPage },
      { title: 'Alerts', component: AlertListPage },
      { title: 'Badges', component: BadgeBasicPage },
      { title: 'Buttons', component: ButtonsListPage },
      { title: 'Cards', component: CardsListPage },
      { title: 'Checkbox', component: CheckboxBasicPage },
      { title: 'Chip', component: ChipPage },
      { title: 'DateTime', component: DatetimeBasicPage },
      { title: 'Floating Action Buttons', component: FabBasicPage },
      { title: 'Events', component: GestureBasicPage },
      { title: 'Grid', component: GridBasicPage },
      { title: 'Icons', component: IconBasicPage },
      { title: 'Inputs', component: InputsListPage },
      { title: 'InfiniteScroll', component: InfiniteScrollPage },
      { title: 'Lists', component: ListsListPage },
      { title: 'Loading', component: LoadingBasicPage },
      { title: 'LoadingController', component: LoadingControllerPage },
      { title: 'Menu', component: MenuBasicPage },
      { title: 'Modals', component: ModalBasicPage },
      { title: 'Navigation', component: NavigationBasicPage },
      { title: 'Popover', component: PopoverBasicPage },
      { title: 'Radio', component: RadioBasicPage },
      { title: 'Range', component: RangeBasicPage },
      { title: 'Refresher', component: RefresherPage },
      { title: 'Scroll', component: ScrollPage },
      { title: 'SearchBar', component: SearchbarBasicPage },
      { title: 'Segment', component: SegmentBasicPage },
      { title: 'Select', component: SelectBasicPage },
      { title: 'SelectOptions', component: SelectOptionsPage },
      { title: 'Slide', component: SlidePage },
      { title: 'Slides', component: SlideBasicPage },
      { title: 'Tabs', component: TabsListPage },
      { title: 'Toast', component: ToastBasicPage },
      { title: 'Toggle', component: ToggleBasicPage },
      { title: 'Toolbar', component: ToolbarsListPage }
    ];
    console.log("Exit constructor");
  }
  initializeApp() {
    console.log("Entering initializeApp");
    this.platform.ready().then(() => {
      if (this.platform.is('core') || this.platform.is('mobileweb')) {
        console.log("Platform = core || mobileweb");
      } else {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }

    });
    console.log("Exit initializeApp");
  }

  ngAfterContentInit() {
    console.log("Entering ngAfterContentInit");

    // production-only code
    // production is false unless viewed on the docs
    // http://ionicframework.com/docs/v2/components/
    if (this.platform.getQueryParam('production') === 'true') {
      this.isProductionMode = true;

      // Platform is ios by default
      // only change it if android or windows
      if (this.platform.is('android')) {
        this.currentPlatform = 'android';
      } else if (this.platform.is('windows')) {
        this.currentPlatform = 'windows';
      }

    }
    console.log("Exit ngAfterContentInit");
  }

  openPage(page) {
    const animation = this.animations[Math.floor(Math.random() * this.animations.length)];
    console.log("Transition animation selected: " + animation);
    if (animation === "ios-transition" || animation === "md-transition" || animation === "wp-transition") {

      const animationsOptions = {
        animate: true, animation: animation, duration: 1000
      };
      this.nav.setRoot(page.component, {}, animationsOptions);
    } else {
      if (animation === "curl") {
        let options: NativeTransitionOptions = {
          direction: 'up',
          duration: 1200
        };
        this.nativePageTransitions.curl(options);
      } else if (animation === "fade") {
        this.nativePageTransitions.fade(null);
      } else if (animation === "slide") {
        let options: NativeTransitionOptions = {
          direction: 'left',
          duration: 400,
          slowdownfactor: -1,
          iosdelay: 50
        };

        this.nativePageTransitions.slide(options);
      } else if (animation === "flip") {
        let options: NativeTransitionOptions = {
          direction: 'up',
          duration: 600
        };

        this.nativePageTransitions.flip(options);
      }

      this.nav.setRoot(page.component);
    }

  }

}
