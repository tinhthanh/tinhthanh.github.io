import { Directive, Input } from "@angular/core";
import { FieldMode, IElementUi } from "./element.ui";
import { KeyValue } from "@angular/common";

@Directive()
export abstract class ElBase<T extends IElementUi> {
    protected readonly Object = Object;
    @Input() fieldMode: FieldMode = FieldMode.LIVE;
    @Input() uiElement!: T;
    orderOriginal = (
      a: KeyValue<string, IElementUi>,
      b: KeyValue<string, IElementUi>
    ) => {
      return a.value.order - b.value.order;
    };
}
