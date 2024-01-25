import { Component, Input } from "@angular/core";
import { VgChildPage } from "./vg-child.page";
import { JSONType } from "html-to-json-parser";
import { NgClass } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-vg-parent',
  template: `
  @if(node) {
    <div>{{ node.type }}</div>
    @if(node?.content) {
      @for(child of node?.content; track child; let i = $index) {
          <app-vg-child [node]="child"></app-vg-child>
      }
    }
  } @else{
    Loading...
  }
  `,
  imports: [VgChildPage, NgClass]
})
export class VgParentPage {
  @Input() node!: JSONType | any;

}
