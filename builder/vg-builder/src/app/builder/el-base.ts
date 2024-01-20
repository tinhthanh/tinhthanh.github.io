import { ChangeDetectorRef, Directive, Input, OnInit, inject } from "@angular/core";
import { FieldMode, IElementUi } from "./element.ui";
import { KeyValue } from "@angular/common";
import { EventBusService } from "./node-state/event-bus.service";

@Directive()
export abstract class ElBase<T extends IElementUi> implements OnInit {
    private cdf = inject(ChangeDetectorRef);
    private eventBus = inject(EventBusService);
    protected readonly Object = Object;
    @Input() fieldMode: FieldMode = FieldMode.LIVE;
    @Input() uiElement!: T;
    orderOriginal = (
      a: KeyValue<string, IElementUi>,
      b: KeyValue<string, IElementUi>
    ) => {
      return a.value.order - b.value.order;
    };
    ngOnInit(): void {
        if(this.uiElement.id) {
          this.eventBus.listenChange(this.uiElement.id).subscribe((item) => {
            console.log(item);
            this.cdf.detectChanges();
          });
        }
    }
}
