import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Column, Container, PageUi, Row } from "../modules/glass-morphism/pages/element.ui";
import { TreeElementPage } from "./tree-element/tree-element.page";
import { SettingElementPage } from "./setting-element/setting-element.page";
import {ReviewPagePage} from "./review-page/review-page.page";
import { ChromeBrowserPage } from "./chrome-brower/chrome-browser.page";
import { DeviceIphonePage } from "./device-iphone/device-iphone.page";

@Component({
    selector: 'app-ui-builder',
    template: `
     <div class="d-flex flex-row ">
       <app-tree-element [uiElement]="uiElement"></app-tree-element>
       <div class="builder-review">
        <app-device-iphone>
        <app-review-page [uiElement]="uiElement" ></app-review-page>
        </app-device-iphone>
        <!-- <app-chrome-browser>
            <app-review-page [uiElement]="uiElement" ></app-review-page>
        </app-chrome-browser> -->
       </div>
       <app-setting-element></app-setting-element>
     </div>
    `,
    styles: [`
        :host {
            color: coral;
        }
        .builder-review {
            flex:1;
            border: 1px solid red;
            padding: 20px
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
    `],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TreeElementPage,
    SettingElementPage,
    ReviewPagePage,
    ChromeBrowserPage,
    DeviceIphonePage
  ]
})
export class UiBuilderPage {
    uiElement = new PageUi({
        label: 'Login page',
        children: {
            header : new Column({
                label: 'Column 1',
                children: {}
            }),
            header1 : new Column({
                label: 'Column 2',
                children: {
                    header : new Column({
                    label: 'Column',
                    children: {
                        header : new Row({
                            label: 'Row',
                            children: {}
                        }),
                        header2 : new Row({
                          label: 'Row',
                          children: {}
                        }),
                    }
                }),}
            }),
            header2 : new Column({
                label: 'Column 3',
                children: {},
            }),
        }

    });
}
