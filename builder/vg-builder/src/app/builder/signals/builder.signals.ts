import { Injectable } from "@angular/core";
import { EventBusSignals } from "./event-bus.signals";
import { DeviceType, GlobalBuilderState, ThemeType } from "../types";
import { mockPage } from "./mock.data";

@Injectable()
export class BuilderSignals  extends EventBusSignals<GlobalBuilderState>  {
    constructor() {
        super();
     console.log('init BuilderSignals and set default state');
     this.set('deviceMode', DeviceType.DESKTOP);
     this.set('themeMode', ThemeType.LIGHT);
     this.set('parentNode' ,mockPage );
    }
}
