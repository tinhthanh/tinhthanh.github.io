import { Component, Input, forwardRef } from "@angular/core";
import { VgParentPage } from "./vg-parent.page";
import { JSONType } from "html-to-json-parser";
import { NgClass } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-vg-child',
  template: `
    @if(node) {
      <div>{{ node.type }}</div>
      @if(node?.content) {
        @for(child of node?.content; ; track child; let i = $index) {
            <app-vg-parent [node]="child"></app-vg-parent>
       }
      }
    } @else {
      Loading...
    }
  `,
  imports: [
    forwardRef(() => VgParentPage),
    NgClass
  ]
})
export class VgChildPage {
 @Input() node!: JSONType | any;
}
