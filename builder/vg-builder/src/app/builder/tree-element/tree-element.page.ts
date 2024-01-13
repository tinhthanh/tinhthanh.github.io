import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import { FieldMode, IElementUi } from "../../modules/glass-morphism/pages/element.ui";
import {KeyValuePipe, NgTemplateOutlet} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-tree-element',
  templateUrl: './tree-element.page.html',
  styleUrls: ['./tree-element.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KeyValuePipe, NgTemplateOutlet]
})
export class TreeElementPage {
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() uiElement!: IElementUi;
  orderOriginal = () => 0;
  protected readonly Object = Object;
}
