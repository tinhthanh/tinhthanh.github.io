import { Component, OnInit } from "@angular/core";
import { ElBase } from "../../el-base";
import { UiIframe } from "../../element.ui";
import {SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-ui-iframe',
    template:  `
     @if(uiElement && urlSafe) {
            <iframe [src]="urlSafe" [height]="uiElement.height" [width]="uiElement.width"></iframe><iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>
        }
    `,
    styleUrls: ['ui-iframe.page.html']
})
export class UiIframePage extends ElBase<UiIframe> implements OnInit {
    urlSafe!: SafeResourceUrl;
    constructor(public sanitizer: DomSanitizer) {
        super();
    }
    ngOnInit(): void {
        if(this.uiElement && this.uiElement.src) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.uiElement.src);
        }
    }
}