import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import {HomePage} from "./home/home.page";
import { RoutersPage } from "./routers/routers.page";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[id=app]',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [IonApp, HomePage, RoutersPage],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {}
}
