import { Directive, Input, OnChanges, SimpleChanges, Type, ViewContainerRef} from '@angular/core';


@Directive({
    selector: '[appRender]',
    standalone: true
})
export class RederDirective implements OnChanges {

    @Input()
    appRender: Type<any> | undefined;
    @Input()
    initData: any;
    @Input() initEvent: any;
    private component: any;

    constructor(public viewContainer: ViewContainerRef) {
        viewContainer.clear();
        if (this.appRender) {
            this.component = viewContainer.createComponent(this.appRender).instance;
            Object.assign(this.component, this.initData || {});
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['appRender'] && changes['appRender'].previousValue != changes['appRender'].currentValue) {
            this.viewContainer.clear();
            if (this.appRender) {
                this.component = this.viewContainer.createComponent(this.appRender).instance;
                Object.assign(this.component, changes['initData'] ? (changes['initData'].currentValue || {}) : {});
                Object.keys(this.initEvent || {}).forEach( key => {
                    if(this.component[key]){
                        this.component[key].subscribe( (data: any) => this.initEvent[key](data) )
                    }
                })
            }
        } else if (this.component && changes['initData'] && changes['initData'].previousValue != changes['initData'].currentValue) {
            Object.assign(this.component, changes['initData'].currentValue || {});
        }
    }
}
