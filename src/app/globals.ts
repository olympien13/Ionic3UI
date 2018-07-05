

import { Injectable } from '@angular/core';


@Injectable()
export class GlobalVariables {

    constructor() { }

    private _isDev: boolean = ((<any>window)['IonicDevServer'] != undefined);

    public isDevMode(): boolean {
        return this._isDev;
    }


    myLog(componentName: string, message: string): void {
        console.log("[" + componentName + "] - " + message);
    }
}