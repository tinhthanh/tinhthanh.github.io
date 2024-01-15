import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Column,
  Container,
  PageUi,
  Row,
} from '../modules/glass-morphism/pages/element.ui';
import { TreeElementPage } from './tree-element/tree-element.page';
import { SettingElementPage } from './setting-element/setting-element.page';
import { ReviewPagePage } from './review-page/review-page.page';
import { ChromeBrowserPage } from './chrome-brower/chrome-browser.page';
import { DeviceIphonePage } from './device-iphone/device-iphone.page';

@Component({
  selector: 'app-ui-builder',
  template: `
    <div class="d-flex flex-row ">
      <app-tree-element [uiElement]="uiElement"></app-tree-element>
      <div class="builder-review">
        <!-- <app-device-iphone>
        <app-review-page [uiElement]="uiElement" ></app-review-page>
        </app-device-iphone> -->
        <app-chrome-browser>
          <app-review-page [uiElement]="uiElement"></app-review-page>
        </app-chrome-browser>
      </div>
      <app-setting-element></app-setting-element>
    </div>
  `,
  styles: [
    `
      :host {
        color: coral;
      }
      .builder-review {
        flex: 1;
        border: 1px solid red;
        padding: 20px;
      }
      app-tree-element {
        width: 300px;
        height: 100vh;
        border: 1px solid red;
        overflow: auto;
      }
      app-setting-element {
        width: 300px;
        height: 100vh;
        border: 1px solid red;
        overflow: auto;
      }
    `,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TreeElementPage,
    SettingElementPage,
    ReviewPagePage,
    ChromeBrowserPage,
    DeviceIphonePage,
  ],
})
export class UiBuilderPage {
  uiElement = new PageUi({
    label: 'Login page',
    children: {
      header: new Container({
        label: 'Container',
        children: {
          header: new Row({
            label: 'row nenk',
            children: {
              col: new Column({
                label: 'col 1',
                children: {
                  c: new  Container({
                    label: 'Container chil',
                    children: {}
                  })
                },
              }),
              col2: new Column({
                label: 'col 2',
                children: {},
              }),
              col3: new Column({
                label: 'col 3 ',
                children: {},
              }),
            },
          }),
          content: new Row({
            label: 'content',
            children: {},
          }),
          footer: new Row({
            label: 'footer',
            children: {},
          }),
        },
      }),
    },
  });
}
