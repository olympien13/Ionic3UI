import { Component } from '@angular/core';

import { MockProvider } from './provider';
import { Refresher } from 'ionic-angular';

@Component({
    templateUrl: 'refresher.html'
})

export class RefresherPage {
    items: string[];

    constructor(private mockProvider: MockProvider) {
        this.items = mockProvider.getData();
    }

    doRefresh(refresher: Refresher) {
        console.log('DOREFRESH', refresher);

        this.mockProvider.getAsyncData().then((newData) => {
            for (var i = 0; i < newData.length; i++) {
                this.items.unshift(newData[i]);
            }

            refresher.complete();
        });
    }

    doPulling(refresher: Refresher) {
        console.log('DOPULLING', refresher.progress);
    }
}