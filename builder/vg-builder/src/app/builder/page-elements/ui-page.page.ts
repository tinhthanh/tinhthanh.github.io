import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Container} from "../element.ui";
import { KeyValuePipe, NgClass, NgTemplateOutlet } from "@angular/common";
import { BuilderFactoryPage } from "../builder-factory/builder-factory.page";
import { ElBase } from "src/app/builder/el-base";

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
        <app-builder-factory [fieldMode]="fieldMode" [uiElement]="uiElement" ></app-builder-factory>
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
      <app-builder-factory [fieldMode]="fieldMode" [uiElement]="children" ></app-builder-factory>
    }
  </ng-template>
}
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
   :host {
    width: 100%;
    height: 100%;
   }
   app-ui-element {
    width: 100%;
   }
  `],
    imports: [KeyValuePipe, NgClass, NgTemplateOutlet, BuilderFactoryPage]
})
export class UiPagePage extends ElBase<Container> implements OnInit{
   override ngOnInit(): void {
      super.ngOnInit();
  }
}
