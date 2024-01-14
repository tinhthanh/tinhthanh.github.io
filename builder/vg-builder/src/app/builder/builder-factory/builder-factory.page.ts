import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldMode } from '../../modules/form-field/form.field';
import { IElementUi, UiType } from '../../modules/glass-morphism/pages/element.ui';
import { ElContainerPage } from '../layout-elements/el-container/el-container.page';

@Component({
  selector: 'app-builder-factory',
  template: `
    @if ( _uiElement ) {
    <div>
        {{_uiElement.label}}
        @if(_uiElement.type === UiType.container ) {
            <app-el-container>
                 <ng-content></ng-content>
            </app-el-container>
        } @else {
            <ng-content></ng-content>
        }
    </div>
    }
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ ElContainerPage ]
})
export class BuilderFactoryPage {
    readonly UiType = UiType;
    _uiElement!: IElementUi;
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() set uiElement( el: IElementUi) {
    this._uiElement = el;
  }
}
