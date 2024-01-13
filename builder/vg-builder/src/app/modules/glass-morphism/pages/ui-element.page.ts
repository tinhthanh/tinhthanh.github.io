import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldMode, IElementUi } from './element.ui';
import { UiElementItemPage } from './ui-element-item.page';
import { KeyValue, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-ui-elemnet',
  template: `
        @if(uiElement) {
        <div>
            {{uiElement.label}}
            @if(uiElement.children) {
                @for (item of uiElement.children | keyvalue: orderOriginal ; track item) {
                    <app-ui-element-item [fieldMode]="fieldMode" [uiElement]="item.value" > </app-ui-element-item>
                }
            }
        </div>
        }
        
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UiElementItemPage,
    KeyValuePipe
  ]
})
export class UiElementPage {
    @Input() fieldMode: FieldMode = FieldMode.LIVE;
    @Input() uiElement!: IElementUi;
    orderOriginal = (a: KeyValue<string,IElementUi>, b: KeyValue<string,IElementUi>) => {
        return a.value.order - b.value.order;
    };
}
