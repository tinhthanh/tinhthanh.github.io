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
import {ViewContainerRef} from '@angular/core';
@Component({
  selector: 'app-control-field',
  standalone: true,
  template: ``,
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
  cp!: Type<any> ;
  @Input() set field(field: IField ) {
    if(field) {
      this._field = field;
      // @ts-ignore
      this.cp = cpRegister[field.type] ;
      this.viewContainerRef.clear();
    const instance =  this.viewContainerRef.createComponent(this.cp).instance;
     Object.assign(instance, {field: this._field,mode: this.mode,control:this.formControl});
    }
  };
  @Input() mode = FieldMode.CREATE;
  // _value: string | number | Date = '';
  constructor(private viewContainerRef: ViewContainerRef, private formGroupDirective: FormGroupDirective) {}
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
