import { Component, Input } from "@angular/core";
import { VgChildPage } from "./vg-child.page";
import { JSONType } from "html-to-json-parser";
import { NgClass } from "@angular/common";
import { VgRenderDirective } from "./vg-render.directive";

@Component({
  standalone: true,
  selector: 'app-vg-parent',
  template: `
  @if(node) {
    <div>{{ node.type }}</div>
    @if(node?.content) {
      @for(child of node?.content; track child; let i = $index) {
           <ng-template [appVgRender]="child" [templateRef]="inner" ></ng-template>
           <ng-template #inner>
           <app-vg-child [node]="child"></app-vg-child>
          </ng-template>
      }
    }
  } @else{
    Loading...
  }
  `,
  imports: [VgChildPage, NgClass, VgRenderDirective]
})
export class VgParentPage {
  @Input() node!: JSONType | any;

}
