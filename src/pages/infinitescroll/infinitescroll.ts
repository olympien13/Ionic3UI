import { Component } from '@angular/core';
import { MockProviderInfiniteScroll } from './provider';
import { InfiniteScroll } from 'ionic-angular';

@Component({
  templateUrl: 'infinitescroll.html'
})

export class InfiniteScrollPage {
  items: string[];

  constructor(private mockProvider: MockProviderInfiniteScroll) {
    this.items = mockProvider.getData();
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    this.mockProvider.getAsyncData().then((newData) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.push(newData[i]);
      }

      infiniteScroll.complete();

      if (this.items.length > 90) {
        infiniteScroll.enable(false);
      }
    });
  }
}
