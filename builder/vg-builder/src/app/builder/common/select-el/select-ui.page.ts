import {ChangeDetectionStrategy, Component, EventEmitter, Output} from "@angular/core";
import {IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList} from "@ionic/angular/standalone";
import { GroupType, IElementUi, Row, UiType, registerBuilder } from "../../element.ui";
import { JsonPipe, KeyValuePipe } from "@angular/common";

@Component({
  selector: 'app-select-el',
  templateUrl: './select-ui.page.html',
  styleUrls: ['./select-ui.page.scss'],
  standalone: true,
  imports: [
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonList,
    KeyValuePipe,
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectUiPage {
  element!: Record<GroupType, IElementUi[] | null >;
  constructor() {
    console.log(Object.values(registerBuilder));
  this.element = Object.values(registerBuilder).reduce( (pre: any, curr)=> {
      if(curr && curr.groupType) {
        pre[curr.groupType] = [...(pre[curr.groupType] || []), curr];
      }
      return pre;
   }, {});
   console.log( this.element )
  }
  @Output() vgSelect: EventEmitter<IElementUi> = new EventEmitter();
 selectEl(item: IElementUi) {
   this.vgSelect.emit({...item, htmlAttributes: {open: true}});
 }
}
