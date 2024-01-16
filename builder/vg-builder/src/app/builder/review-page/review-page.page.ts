import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FieldMode, IElementUi, PageUi} from "../../modules/glass-morphism/pages/element.ui";
import {UiPagePage} from "../../modules/glass-morphism/pages/ui-page.page";

@Component({
  selector: 'app-review-page',
  template: `
    @if(uiElement) {
      <app-ui-page  [uiElement]="uiElement" ></app-ui-page>
    }
  `,
  imports: [
    UiPagePage
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      width: 100%;
      height: 100%;
    }
  `
})
export class ReviewPagePage {
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() uiElement!: PageUi;
}
