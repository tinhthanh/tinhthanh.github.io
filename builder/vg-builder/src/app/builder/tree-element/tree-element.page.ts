import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Signal, inject} from "@angular/core";
import { FieldMode, IElementUi } from "../element.ui";
import {KeyValuePipe, NgTemplateOutlet} from "@angular/common";
import {IonContent, IonIcon, IonPopover, IonSearchbar, PopoverController} from "@ionic/angular/standalone"
import {SelectUiPage} from "../common/select-el/select-ui.page";
import {addIcons} from "ionicons";
import {chevronForwardCircle, chevronDownCircle, trashOutline, removeCircle, addCircle} from 'ionicons/icons';
import { take } from "rxjs";
import { BuilderSignals } from "../signals/builder.signals";
import { NodeUtils } from "../signals/node.util";
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

  orderOriginal = () => 0;
  protected readonly Object = Object;
  readonly builderSignals = inject(BuilderSignals);
  readonly currentNodeActive = this.builderSignals.select('currentNodeActive');
  readonly parentNode = this.builderSignals.select('parentNode');
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
      const root = this.parentNode();
    if(root) {
      NodeUtils.addNode(root, {parent, node});
      // this.uiElement = { ...root };
      this.builderSignals.set('parentNode', { ...root });
      }
    }
  }
  removeNode(node: IElementUi) {
    const root = this.parentNode();
    if(root) {
     const temp = NodeUtils.removeNode({ ...root }, node) as IElementUi;
     console.log('remove', node);
     this.builderSignals.set('parentNode', temp);
    }
  }
  log() {
    console.log('rennder app-tree-element')
  }
  selectEl($event: Event,uiElement: IElementUi)  {
    $event.preventDefault();
    // console.log(uiElement)
    this.builderSignals.set('currentNodeActive', uiElement);
    // this.uiElement = uiElement;
  }
  collapse(node: IElementUi, status: boolean) {
    node.attributes = {...(node.attributes || {}) , open: status };
  }
}
