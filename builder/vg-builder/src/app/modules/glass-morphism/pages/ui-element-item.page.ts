import { ChangeDetectionStrategy, Component, Input, forwardRef } from "@angular/core";
import { UiElementPage } from "./ui-element.page";
import { FieldMode, IElementUi } from "./element.ui";

@Component({
    selector:'app-ui-element-item',
    template: `
         @if(uiElement) {
            <app-ui-elemnet [fieldMode]="fieldMode" [uiElement]="uiElement"></app-ui-elemnet>
         }
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        forwardRef(() => UiElementPage)
    ]
})
export class UiElementItemPage {
    @Input() fieldMode: FieldMode = FieldMode.LIVE;
    @Input() uiElement!: IElementUi;
}