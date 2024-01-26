import { Injectable } from "@angular/core";
import { EventBusSignals } from "./event-bus.signals";
import { GlobalBuilderState } from "../types";

@Injectable()
export class BuilderSignals  extends EventBusSignals<GlobalBuilderState>  {
    constructor() {
        super();
     console.log('init BuilderSignals');
    }
}
