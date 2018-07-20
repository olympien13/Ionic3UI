import { Component } from '@angular/core';

@Component({
    templateUrl: 'chip.html'
})

export class ChipPage {
    delete(chip: Element) {
        chip.remove();
    }
}