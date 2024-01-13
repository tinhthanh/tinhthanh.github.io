import { ChangeDetectionStrategy, Component } from "@angular/core";
import { UiElementPage } from "../modules/glass-morphism/pages/ui-element.page";
import { IElementUi, PageUi } from "../modules/glass-morphism/pages/element.ui";

@Component({
    selector: 'app-ui-builder',
    template: `
      <app-ui-elemnet [uiElement]="uiElement"></app-ui-elemnet>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        UiElementPage
    ]
})
export class UiBuilderPage {
    uiElement = new PageUi({
        label: 'Login page',
        children: {
            header : new PageUi({
                label: 'ddsd',
                children: {}
            }),
            header1 : new PageUi({
                label: 'ddsd',
                children: { 
                    header : new PageUi({
                    label: 'xxx',
                    children: {
                        header : new PageUi({
                            label: 'yyyyy',
                            children: {}
                        }),
                    }
                }),}
            }),
            header2 : new PageUi({
                label: 'ddsd',
                children: {}
            }),
        }
        
    });

}