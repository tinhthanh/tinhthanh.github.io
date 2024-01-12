import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy, ElementRef } from "@angular/core";
import { ControlType, FieldMode, IField, ObjectFields } from "../form.field";
import {FormGroup, FormsModule} from "@angular/forms";
import {getDefaultModel, toFormGroup} from "../form.builder";
import {ObjectFieldsComponent} from "../object-fields/object-fields.component";
import {UiButtonSubmitComponent} from "../ui/ui-button-submit.component";
import {NgClass, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: "app-form-group",
  template: `
    <form #ngForm="ngForm" (ngSubmit)='submit()' [ngClass]="{ 'submitted': ngForm.submitted}">
      <app-object-fields *ngIf="formGroup" [formGroup]="formGroup" [fieldMode]="fieldMode"
                         [objectField]="data"></app-object-fields>
      <div class="d-flex justify-center">
        <app-ui-button-submit></app-ui-button-submit>
      </div>
    </form>
  `,
  imports: [
    ObjectFieldsComponent,
    UiButtonSubmitComponent,
    NgIf,
    NgClass,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent<T> implements OnInit{
@Input() formGroup!: FormGroup;
data!: ObjectFields<T>;
@Input() fieldMode: FieldMode = FieldMode.CREATE;
@Input() config!: { [K in keyof T]: IField };
@Input() patchValue!: T;
@Output() submitEvent = new EventEmitter<T>();
constructor(public element: ElementRef) {}
  ngOnInit(): void {
    if (this.config) {
      this.data = new ObjectFields({
        name: 'root',
        property: this.config
      });
      let model: {root: T} ;
      if (this.patchValue)  {
        model = ({root: transform( this.config, this.patchValue)}) as {root: T};
      } else {
        model = getDefaultModel(this.data) as {root: T};
      }
      this.formGroup = toFormGroup(model) as FormGroup;
      }
    }

  submit() {
    if(this.formGroup.valid) {
      console.log(this.formGroup.getRawValue());
      this.submitEvent.emit(this.formGroup.getRawValue());
    } else {
      this.scrollToFirstInvalidControl();
    }
  }
  private scrollToFirstInvalidControl() {
    let form = this.element.nativeElement;
    let firstInvalidControl = [...form.querySelectorAll('input.ng-invalid, textarea.ng-invalid ,ng-select.ng-invalid')].shift();
    if(firstInvalidControl) {
      firstInvalidControl.scrollIntoView();
      (firstInvalidControl as HTMLElement).focus();
    }
  }
}
 const transform = <T>(input: { [key: string]: IField }, data: T) => {
  return Object.keys(input).reduce((pre: any, cur) => {
       if (input[cur].type === ControlType.ArrayObject) {
           pre[cur] = data? ((data  as any)[cur] || []).map( (item : T) => {
             return transform(input[cur].property as {[key: string]: IField}, item);
           }): [];
         return pre;
       }
       if(input[cur].type === ControlType.ObjectFields) {
         pre[cur] = transform(input[cur].property as {[key: string]: IField}, (data as any)[cur]);
         return pre;
        }
        if(data && (data as any)[cur] === undefined) {
          pre[cur] = null;
          return pre;
        }
        pre[cur] = data ? (data as any)[cur] : null;
        return pre;
   }, {});
};
