import { Directive, ViewContainerRef, Input,Type, TemplateRef, OnChanges, SimpleChanges } from "@angular/core";
import { JSONType } from "html-to-json-parser";

@Directive({
  selector: '[appVgRender]',
  standalone: true
})
export class VgRenderDirective implements OnChanges {
  @Input() appVgRender:  JSONType | undefined;
  @Input() templateRef!: TemplateRef<any> ;
  constructor(public viewContainer: ViewContainerRef) {
    viewContainer.clear();
    console.log(this.appVgRender)
    if(this.templateRef) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appVgRender'] && changes['appVgRender'].previousValue != changes['appVgRender'].currentValue) {
        this.viewContainer.clear();
        if (this.appVgRender) {
          console.log(this.appVgRender)
          if(this.templateRef) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          }
            // this.component = this.viewContainer.createComponent(this.appRender).instance;
            // Object.assign(this.component, changes['initData'] ? (changes['initData'].currentValue || {}) : {});
            // Object.keys(this.initEvent || {}).forEach( key => {
            //     if(this.component[key]){
            //         this.component[key].subscribe( (data: any) => this.initEvent[key](data) )
            //     }
            // })
        }
    }
    // else if (this.component && changes['initData'] && changes['initData'].previousValue != changes['initData'].currentValue) {
    //     Object.assign(this.component, changes['initData'].currentValue || {});
    // }
}
}
