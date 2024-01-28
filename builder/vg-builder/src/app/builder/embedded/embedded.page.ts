import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { BuilderSignals } from "../signals/builder.signals";
import { UiPagePage } from "../page-elements/ui-page.page";
@Component({
  standalone: true,
  selector: 'app-embedded',
  template: `
    @if(parentNode(); as node) {
      <app-ui-page [uiElement]="node"></app-ui-page>
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UiPagePage],
  providers: [BuilderSignals],
  styles: `
    :host {
      width: 100%;
      height: 100vh;
      display: block;
      overflow-x: auto;
    }
  `
})
export class EmbeddedPage {
  readonly builderSignals = inject(BuilderSignals);
  readonly parentNode = this.builderSignals.select('parentNode');
}
