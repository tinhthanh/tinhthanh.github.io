import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { JSONToHTML, JSONType, HTMLToJSON } from 'html-to-json-parser';
import { VgParentPage } from './vg-parent.page';
@Component({
  standalone: true,
  selector: 'app-vg-builder',
  template: `
    @if(node) {
    <app-vg-parent [node]="node"> </app-vg-parent>
    }
  `,
  imports: [IonicModule, VgParentPage],
})
export class VgBuilderPage {
  node!: JSONType;
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
                  </ion-content>
      </div>
    `;
    HTMLToJSON(html.trim()).then((rs) => {
      console.log(rs);
      this.node = rs as JSONType;
    });
  }
}
