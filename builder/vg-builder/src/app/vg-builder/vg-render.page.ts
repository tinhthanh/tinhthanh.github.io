import { Component } from "@angular/core";
import {VgBuilderPage} from "./vg-builder.page";

@Component({
  standalone: true,
  selector: 'app-vg-render',
  template: `
    <app-vg-builder></app-vg-builder>
  `,
  imports: [
    VgBuilderPage

  ]
})
export class VgRenderPage {
  constructor() {
  }
}
