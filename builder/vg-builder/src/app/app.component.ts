import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import {HomePage} from "./home/home.page";
import { RoutersPage } from "./routers/routers.page";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [IonApp, HomePage, RoutersPage]
})
export class AppComponent {
  constructor() {}
}
