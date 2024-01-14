import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Column, PageUi } from "../modules/glass-morphism/pages/element.ui";
import { TreeElementPage } from "./tree-element/tree-element.page";
import { SettingElementPage } from "./setting-element/setting-element.page";
import {ReviewPagePage} from "./review-page/review-page.page";

@Component({
    selector: 'app-ui-builder',
    template: `
     <div class="d-flex flex-row ">
       <app-tree-element [uiElement]="uiElement"></app-tree-element>
       <app-review-page  [uiElement]="uiElement" ></app-review-page>
       <app-setting-element></app-setting-element>
     </div>
    `,
    styles: [`
        :host {
            color: coral;
        }
        app-review-page {
            flex:1;
            border: 1px solid red;
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
    ReviewPagePage
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
                    header : new PageUi({
                    label: 'row',
                    children: {
                        header : new PageUi({
                            label: 'col',
                            children: {}
                        }),
                        header2 : new PageUi({
                          label: '3333',
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
