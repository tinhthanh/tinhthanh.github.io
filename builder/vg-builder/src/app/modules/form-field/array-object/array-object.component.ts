import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import { ArrayObject, ControlType, FieldMode } from "../form.field";
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { toFormGroup, toValueDefault } from '../form.builder';
import {JsonPipe, KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {ObjectFieldsComponent} from "../object-fields/object-fields.component";
import {ControlFieldComponent} from "../control-field/control-field.component";

@Component({
  standalone: true,
  selector: 'app-array-object',
  template: `
    <div class="mb-3" *ngIf="formGroup" [formGroup]="formGroup">
      <ng-container *ngFor="let form of formGroup.controls; let i = index">
        <div class="d-flex" [formGroup]="form">
          <div class="row flex-1">
            <ng-container *ngFor="let item of arrayObject | keyvalue: orderOriginal">
              <app-control-field
                *ngIf="
                  item.value.type !== controlType.ObjectFields &&
                  item.value.type !== controlType.ArrayObject
                "
                [mode]="fieldMode"
                [field]="item.value"
                [formControlName]="item.value.name"
                [class]="item.value.classes || ''"
              ></app-control-field>
              <ng-container
                *ngIf="
                  item.value.type === controlType.ObjectFields ||
                  item.value.type === controlType.ArrayObject
                "
              >
                <app-object-fields
                  [formGroup]="form"
                  [fieldMode]="fieldMode"
                  [objectField]="item.value"
                ></app-object-fields>
              </ng-container>
            </ng-container>
          </div>
          <div class="remove-item">
            <ion-icon (click)="removeItem(i)" name="trash-outline"></ion-icon>
          </div>
        </div>
        <div class="dash-line mb-3"></div>
      </ng-container>
      <div class="field-control">
        <div class="last">
          <button type="button" (click)="addItem()" class="btn">
            <span> Thêm</span>
            <svg preserveAspectRatio="none" viewBox="0 0 132 45">
              <g clip-path="url(#clip)" filter="url(#goo-big)">
                <circle class="top-left" cx="49.5" cy="-0.5" r="26.5"/>
                <circle class="middle-bottom" cx="70.5" cy="40.5" r="26.5"/>
                <circle class="top-right" cx="104" cy="6.5" r="27"/>
                <circle class="right-bottom" cx="123.5" cy="36.5" r="26.5"/>
                <circle class="left-bottom" cx="16.5" cy="28" r="30"/>
              </g>
              <defs>
                <clipPath id="clip">
                  <rect width="132" height="45" rx="7"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <svg width="0" height="0">
          <defs>
            <filter
              id="goo"
              x="-50%"
              width="200%"
              y="-50%"
              height="200%"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="3"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                result="cm"
              />
            </filter>
            <filter
              id="goo-light"
              x="-50%"
              width="200%"
              y="-50%"
              height="200%"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1.25"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                result="cm"
              />
            </filter>
            <filter
              id="goo-big"
              x="-50%"
              width="200%"
              y="-50%"
              height="200%"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="7"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                result="cm"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    KeyValuePipe,
    IonicModule,
    forwardRef(() => ObjectFieldsComponent),
    ControlFieldComponent,
    JsonPipe
  ]
})
export class ArrayObjectComponent<T> {
  @Input() fieldMode: FieldMode = FieldMode.CREATE;
  @Input() arrayObject!: {[key: string]: ArrayObject<T> };
  @Input() formGroup!: FormGroup | any;
  readonly controlType = ControlType;

  addItem() {
    const formArray = this.formGroup as FormArray;
    const d = Object.values(this.arrayObject).reduce((pre, curr) => ({
        ...pre,
        [curr.name]: toValueDefault(curr),
      }), {});
    console.log(d);
    formArray.push(toFormGroup(d));
  }
  removeItem(index: number) {
    const formArray = this.formGroup as FormArray;
    formArray.removeAt(index);
  }
  orderOriginal = () => 0;
}
