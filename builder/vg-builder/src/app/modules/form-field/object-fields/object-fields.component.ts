import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import {ArrayObject, ControlType, FieldMode, IField, ObjectFields} from "../form.field";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {KeyValuePipe, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {ArrayObjectComponent} from "../array-object/array-object.component";
import {ControlFieldComponent} from "../control-field/control-field.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  standalone: true,
  selector: 'app-object-fields',
  template: `
    <ng-container *ngIf="objectField" [formGroup]="formGroup">
      <label *ngIf="objectField.label" class="label-card "> {{ objectField.label | translate}} </label>
      <ng-container *ngIf="objectField.type === controlType.ArrayObject">
        <ng-container *ngIf="arrayForm">
          <app-array-object
            *ngIf="objectField.property"
            [fieldMode]="fieldMode"
            [formGroup]="arrayForm"
            [arrayObject]="objectField.property"
          ></app-array-object>
        </ng-container>
      </ng-container>
      <ng-container *ngIf="objectField.type === controlType.ObjectFields">
        <ng-container
          *ngTemplateOutlet="
            inner;
            context: {
              type: objectField.type,
              property: objectField.property,
              form: formGroup.get(objectField.name)
            }
          "
        >
        </ng-container>
      </ng-container>
      <ng-template
        #inner
        let-type="type"
        let-property="property"
        let-form="form"
      >
        <form *ngIf="type === controlType.ObjectFields" [formGroup]="form" class="row">
          <ng-container *ngFor="let item of arrayObject(property)">
            <ng-container *ngIf="!item.property">
              <app-control-field
                [mode]="fieldMode"
                [field]="item"
                [formControlName]="item.name"
                [class]="item?.classes || ''"
              ></app-control-field>
            </ng-container>
            <ng-container *ngIf="item.property && Object.values(item.property).length > 0">
              <ng-container
                *ngTemplateOutlet="
                  inner;
                  context: {
                    type: item.type,
                    property: item.property,
                    form: form.get(item.name)
                  }
                "
              >
              </ng-container>
            </ng-container>
          </ng-container>
        </form>
        <ng-container *ngIf="type === controlType.ArrayObject">
          <app-array-object
            [formGroup]="form"
            [arrayObject]="property.property"
            [fieldMode]="fieldMode"
          ></app-array-object>
        </ng-container>
      </ng-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    KeyValuePipe,
    ArrayObjectComponent,
    ControlFieldComponent,
    NgTemplateOutlet,
    TranslateModule
  ]
})
export class ObjectFieldsComponent<T> {
    @Input() fieldMode: FieldMode = FieldMode.CREATE;
    @Input() formGroup!: FormGroup;
    @Input() objectField!: ObjectFields<T> | ArrayObject<T>;
  readonly controlType = ControlType;

  get arrayForm() {
    return this.formGroup.get(this.objectField.name) as FormGroup;
  }
  arrayObject(object: ObjectFields<any> | any): IField[] {
    return Object.entries(object).map(([key, value]) => (value)) as IField[];
  }
  orderOriginal = () => 0;
  protected readonly Object = Object;
}
