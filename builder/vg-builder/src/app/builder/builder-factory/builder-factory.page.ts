import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  IElementUi,
  UiType,
  elRegister,
} from '../element.ui';
import { ElBase } from '../el-base';

@Component({
  selector: 'app-builder-factory',
  template: `
    <ng-container #vcr></ng-container>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuilderFactoryPage extends ElBase<IElementUi> implements OnChanges, OnInit{
  readonly UiType = UiType;
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  cp!: Type<any> | null;
   override ngOnInit(): void {
        super.ngOnInit();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['uiElement'] && changes['uiElement'].previousValue != changes['uiElement'].currentValue) {
      this.render();
    }
  }
  render() {
    if (this.uiElement) {
      this.cp = elRegister[this.uiElement.type];
      this.vcr.clear();
      if (this.cp) {
        const instance = this.vcr.createComponent(this.cp).instance;
        Object.assign(instance, { fieldMode: this.fieldMode, uiElement: this.uiElement });
      }
    }
  }
}
