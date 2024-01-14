import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FieldMode } from "../../../modules/form-field/form.field";
import { IElementUi } from "../../../modules/glass-morphism/pages/element.ui";


@Component({
    selector: 'app-el-container',
    template: `
    @if(uiElement) {
        <div >
            container nek
            <ng-content></ng-content>
        </div>
    }
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElContainerPage {
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() uiElement!: IElementUi;

}