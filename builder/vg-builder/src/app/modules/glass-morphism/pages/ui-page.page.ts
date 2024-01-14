import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FieldMode, IElementUi} from "./element.ui";
import {UiElementPage} from "./ui-element.page";

@Component({
  standalone: true,
  selector: 'app-ui-page',
  template: `
    @if (uiElement) {
      <div class="label-builder-mode ">
        {{uiElement.label}}
      </div>
      <app-ui-element [uiElement]="uiElement"></app-ui-element>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UiElementPage
  ],
  styles: [`
   :host {
    width: 100%;
    height: 100%;
   }
  `]
})
export class UiPagePage {
  @Input() fieldMode: FieldMode = FieldMode.LIVE;
  @Input() uiElement!: IElementUi;
}
