import { Component, Injector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { JSONToHTML, JSONType, HTMLToJSON } from 'html-to-json-parser';
import { VgParentPage } from './vg-parent.page';
import { VgStore } from './stores/store';
@Component({
  standalone: true,
  selector: 'app-vg-builder',
  template: `
    @if(node) {
    <app-vg-parent [node]="node"> </app-vg-parent>

    }
  `,
  imports: [IonicModule, VgParentPage],
  providers: [VgStore]
})
export class VgBuilderPage {
  node!: JSONType;
  // readonly #parentStore = inject(VgStore, { skipSelf: true });
  readonly #portalStore = inject(VgStore);
  // readonly #parentStore = inject(VgStore, { skipSelf: true });
  readonly #injector = inject(Injector);
  constructor() {
    const html = `<div>
                <ion-header>
                    <ion-toolbar>
                      <ion-title>Tab 2</ion-title>
                    </ion-toolbar>
                  </ion-header>
                  <ion-content>
                    <ion-header collapse="condense">
                      <ion-toolbar>
                        <ion-title size="large">Tab 2</ion-title>
                      </ion-toolbar>
                    </ion-header>
                    <ion-content>
                    <ion-header collapse="condense">
                      <ion-toolbar>
                        <ion-title size="large">Tab 2</ion-title>
                      </ion-toolbar>
                      <ion-content>
                      <ion-header collapse="condense">
                        <ion-toolbar>
                          <ion-title-thanh size="large">THANNH</ion-title-thanh>
                        </ion-toolbar>
                      </ion-header>
                    </ion-content>
                    </ion-header>
                  </ion-content>
                  </ion-content>
      </div>
    `;
    HTMLToJSON(html.trim()).then((rs) => {
      console.log(rs);
      this.node = rs as JSONType;
    });
  }
}
