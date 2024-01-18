import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import { FieldMode, IElementUi } from "../element.ui";
import {KeyValuePipe, NgTemplateOutlet} from "@angular/common";
import {IonContent, IonIcon, IonPopover, PopoverController} from "@ionic/angular/standalone"
import {SelectUiPage} from "../common/select-el/select-ui.page";
import {addIcons} from "ionicons";
import {addCircleOutline } from 'ionicons/icons';
@Component({
  standalone: true,
  selector: 'app-tree-element',
  templateUrl: './tree-element.page.html',
  styleUrls: ['./tree-element.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KeyValuePipe, NgTemplateOutlet, IonPopover, IonContent, IonIcon]
})
export class TreeElementPage {
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() uiElement!: IElementUi;
  orderOriginal = () => 0;
  protected readonly Object = Object;
  constructor(public popoverController: PopoverController) {
    addIcons({'add-circle-outline' : addCircleOutline});
  }
  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: SelectUiPage,
      event: e,
      size: 'auto'
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: ${role}`);
  }
}
