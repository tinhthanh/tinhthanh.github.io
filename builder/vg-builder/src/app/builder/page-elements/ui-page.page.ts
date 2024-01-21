import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Container, IElementUi} from "../element.ui";
import { KeyValuePipe, NgClass, NgTemplateOutlet } from "@angular/common";
import { BuilderFactoryPage } from "../builder-factory/builder-factory.page";
import { ElBase } from "src/app/builder/el-base";
import {addIcons} from 'ionicons';
import {IonIcon, IonLabel} from '@ionic/angular/standalone';
import { createOutline }  from 'ionicons/icons';
@Component({
    standalone: true,
    selector: 'app-ui-page',
    template: `
   @if(uiElement) {
    <div  [ngClass]="uiElement.classes" class="builder-mode">
      <div class="flex flex-row align-items-center gap-1 label-builder-mode ">
        <ion-label> {{ uiElement.label }}</ion-label>
        <ion-icon class="text-2xl cursor-pointer" (click)="selectEl($event,uiElement)" name="create-outline"></ion-icon>
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
     <div class="flex flex-row align-items-center gap-1 label-builder-mode  ">
       <ion-label> {{ children.label }}</ion-label>
       <ion-icon class="text-2xl cursor-pointer" (click)="selectEl($event,children)" name="create-outline"></ion-icon>
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
  imports: [KeyValuePipe, NgClass, NgTemplateOutlet, BuilderFactoryPage, IonIcon, IonLabel]
})
export class UiPagePage extends ElBase<Container> implements OnInit{
// edit = output<IElementUi>
constructor() {
  super();
  addIcons({'create-outline' :createOutline })
}
   override ngOnInit(): void {
      super.ngOnInit();
  }
  selectEl($event: Event,uiElement: IElementUi)  {
    $event.preventDefault();
    $event.stopPropagation();
    console.log(uiElement)
    // this.uiElement = uiElement;
  }
}
