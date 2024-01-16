import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  IElementUi,
  UiType,
  elRegister, FieldMode,
} from '../element.ui';

@Component({
  selector: 'app-builder-factory',
  template: `
    <ng-container #vcr></ng-container>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
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
