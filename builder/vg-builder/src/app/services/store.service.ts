import { Injectable } from "@angular/core";
import { VgStore } from "vg-web-sdk";

@Injectable ({providedIn: 'root'})
export class StoreService extends VgStore {
  constructor() {
    super()
  }
}
