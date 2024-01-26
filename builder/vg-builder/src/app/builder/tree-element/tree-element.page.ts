import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject} from "@angular/core";
import { FieldMode, IElementUi } from "../element.ui";
import {KeyValuePipe, NgTemplateOutlet} from "@angular/common";
import {IonContent, IonIcon, IonPopover, IonSearchbar, PopoverController} from "@ionic/angular/standalone"
import {SelectUiPage} from "../common/select-el/select-ui.page";
import {addIcons} from "ionicons";
import {chevronForwardCircle, chevronDownCircle, trashOutline, removeCircle, addCircle} from 'ionicons/icons';
import { take } from "rxjs";
import { BuilderSignals } from "../signals/builder.signals";
import { GlobalBuilderFields } from "../types";
@Component({
  standalone: true,
  selector: 'app-tree-element',
  templateUrl: './tree-element.page.html',
  styleUrls: ['./tree-element.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KeyValuePipe, NgTemplateOutlet, IonPopover, IonContent, IonIcon, IonSearchbar]
})
export class TreeElementPage {
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() uiElement!: IElementUi;
  @Output() vgRemoveNode = new EventEmitter<IElementUi>();
  @Output() vgaddNode = new EventEmitter<{parent:IElementUi, node:IElementUi}>();
  orderOriginal = () => 0;
  protected readonly Object = Object;
  readonly builderSignals = inject(BuilderSignals);
  readonly currentNodeActive = this.builderSignals.select(GlobalBuilderFields.currentNodeActive);
  constructor(public popoverController: PopoverController) {
    addIcons({
    'chevron-forward-circle' : chevronForwardCircle,
    'chevron-down-circle': chevronDownCircle,
    'trash-outline': trashOutline,
    'add-circle': addCircle
    });
  }
  async presentPopover(parent:IElementUi,e: Event) {
  // Xử lý logic bạn muốn thực hiện khi click vào phần tử
  const vgSelect = new EventEmitter<IElementUi>();

    const popover = await this.popoverController.create({
      component: SelectUiPage,
      componentProps: {vgSelect  },
      event: e,
      size: 'auto'
    });
   vgSelect.pipe(take(1)).subscribe( it => {
      console.log(it);
      this.addNode(parent,it);
      this.popoverController.dismiss();
     })
    await popover.present();

    const { role } = await popover.onDidDismiss();
  }
  addNode(parent:IElementUi,node: IElementUi) {
    if(parent.children) {
      this.vgaddNode.emit({parent, node})
    }
  }
  removeNode(node: IElementUi) {
    console.log(node);
    this.vgRemoveNode.emit(node);
  }
  log() {
    console.log('rennder app-tree-element')
  }
  selectEl($event: Event,uiElement: IElementUi)  {
    $event.preventDefault();
    // console.log(uiElement)
    this.builderSignals.set(GlobalBuilderFields.currentNodeActive, uiElement);
    // this.uiElement = uiElement;
  }
  collapse(node: IElementUi, status: boolean) {
    node.attributes = {...(node.attributes || {}) , open: status };
  }
}
