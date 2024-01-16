import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FieldMode } from '../../modules/form-field/form.field';
import {
  IElementUi,
  UiType,
  elRegister,
} from '../../modules/glass-morphism/pages/element.ui';
import { ElContainerPage } from '../layout-elements/el-container/el-container.page';

@Component({
  selector: 'app-builder-factory',
  template: `
    <ng-container #vcr></ng-container>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ElContainerPage],
})
export class BuilderFactoryPage {
  readonly UiType = UiType;
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  cp!: Type<any> | null;
  _uiElement!: IElementUi;
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() set uiElement(el: IElementUi) {
    this._uiElement = el;
    if (el) {
      this.cp = elRegister[el.type];
      this.vcr.clear();
      if (this.cp) {
        const instance = this.vcr.createComponent(this.cp).instance;
        Object.assign(instance, { fieldMode: this.fieldMode, uiElement: el });
      }
    }
  }
}
