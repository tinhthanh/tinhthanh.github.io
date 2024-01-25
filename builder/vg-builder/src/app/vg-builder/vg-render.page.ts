import { Component } from "@angular/core";
import {VgBuilderPage} from "./vg-builder.page";

@Component({
  standalone: true,
  selector: 'app-vg-render',
  template: `
    {{render()}}
    <app-vg-builder></app-vg-builder>
  `,
  imports: [
    VgBuilderPage
  ],
  providers: []
})
export class VgRenderPage {
  constructor() {
  }
  render() {
    console.log('render app-vg-render');
  }
}
