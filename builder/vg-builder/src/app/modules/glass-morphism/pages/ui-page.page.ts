import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FieldMode, IElementUi} from "./element.ui";
import { KeyValue, KeyValuePipe, NgClass, NgTemplateOutlet } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-ui-page',
  template: `
   @if(uiElement) {
    <div [ngClass]="uiElement.classes" class="builder-mode"> 
      <div class="label-builder-mode ">
        {{ uiElement.label }}
      </div>
      @if(uiElement.children && Object.keys(uiElement.children).length > 0) {
            @for( item of uiElement.children | keyvalue:  orderOriginal; track item ) {
              <div [ngClass]="item.value.classes" class="builder-mode">
                <ng-container
                  *ngTemplateOutlet="inner; context: { children: item.value }">
                </ng-container>
            </div>
            }
      } @else {
        {{uiElement.label}}
      }
     </div>
  <ng-template #inner let-children="children">
     <div class="label-builder-mode ">
        {{ children.label }}
      </div>
    @if(children.children && Object.keys(children.children).length > 0) {
          @for( item of children.children | keyvalue:  orderOriginal; track item ) {
            <div [ngClass]="item.value.classes" class="builder-mode">
                <ng-container
                  *ngTemplateOutlet="inner; context: { children: item.value }">
                </ng-container>
            </div>
          }
    } @else {
      {{children.label}}
    }
  </ng-template>
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KeyValuePipe, NgClass, NgTemplateOutlet],
  styles: [`
   :host {
    width: 100%;
    height: 100%;
   }
   app-ui-element {
    width: 100%;
   }
  `]
})
export class UiPagePage {
  protected readonly Object = Object;
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() uiElement!: IElementUi;
  orderOriginal = (
    a: KeyValue<string, IElementUi>,
    b: KeyValue<string, IElementUi>
  ) => {
    return a.value.order - b.value.order;
  };
}
