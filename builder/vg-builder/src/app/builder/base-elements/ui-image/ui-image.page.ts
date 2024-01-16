import { Component } from "@angular/core";
import { ElBase } from "../../el-base";
import { UiImage } from "./../../element.ui";

@Component({
    selector: 'app-ui-image',
    template: `
        @if(uiElement) {
            <img [src]="uiElement.src" alt="">
        }
    `,
    styleUrls: ['ui-image.page.scss']
})
export class UiImagePage extends ElBase<UiImage> {

}
