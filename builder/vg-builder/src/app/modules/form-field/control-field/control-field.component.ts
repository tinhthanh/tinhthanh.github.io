import {
  AbstractControl,
  ControlValueAccessor,
  FormGroupDirective,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {
  Component,
  forwardRef,
  Input,
  ChangeDetectionStrategy,
  Type
} from "@angular/core";
import { FieldMode, IField,cpRegister } from '../form.field';
import {NgIf} from "@angular/common";
import {PlaceholderDirective} from "../placeholder.directive";

@Component({
  selector: 'app-control-field',
  standalone: true,
  template: `
    <ng-container *ngIf="_field && cp">
      <ng-template [appPlaceholder]="cp"
                   [initData]="{field: _field,mode,control:formControl}"></ng-template>
    </ng-container>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    PlaceholderDirective
  ]
})
export class ControlFieldComponent implements ControlValueAccessor {
 _field: IField | undefined;
  cp: Type<any> | undefined;
  @Input() set field(field: IField ) {
    if(field) {
      this._field = field;
      // @ts-ignore
      this.cp = cpRegister[field.type];
    }
  };
  @Input() mode = FieldMode.CREATE;
  // _value: string | number | Date = '';
  constructor( private formGroupDirective: FormGroupDirective) {}
  get formControl(): AbstractControl | any {
    return this.formGroupDirective.control.get(this._field!!.name);
  }
  onChange = (_: any) => {};
  onTouched = () => {};
  writeValue(value: any) {}
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
