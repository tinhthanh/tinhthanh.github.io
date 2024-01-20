import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PageUi } from '../element.ui';
import { UiPagePage } from '../page-elements/ui-page.page';
import { ElBase } from '../el-base';

@Component({
  standalone: true,
  selector: 'app-review-page',
  template: `
    @if(uiElement) {
    {{ log() }}
    <app-ui-page [uiElement]="uiElement"></app-ui-page>
    }
  `,
  imports: [UiPagePage],
  styles: `
    :host {
      width: 100%;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewPagePage extends ElBase<PageUi> {
  log() {
    console.log('app-review-page');
  }
}
