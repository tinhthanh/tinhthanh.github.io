import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
// import { NgSelectComponent } from '@ng-select/ng-select';
import { SelectField } from '../../../form.field';
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
// import { searchStr } from 'apps/app/src/app/services/db-utils';
@Component({
  standalone: true,
  selector: 'app-select-field',
  styleUrls: ['./select-field.component.scss'],
  template: `
    <div
      *ngIf="field"
      class="form-group form-floating"
    >
      <!--      <ng-select-->
      <!--        #select-->
      <!--        [searchFn]="customSearchFn(field.options)"-->
      <!--        class="form-control form-select select-custom"-->
      <!--        [formControl]="control"-->
      <!--        [clearable]="false"-->
      <!--        [clearOnBackspace]="false"-->
      <!--        [searchable]="field.searchable"-->
      <!--        [notFoundText]="'Không tìm thấy' | translate"-->
      <!--        (click)="toggleSelect(select)"-->
      <!--        (change)="onChangeSelectValue(select)"-->
      <!--      >-->
      <!--        <ng-option-->
      <!--          *ngFor="let option of field.options"-->
      <!--          [value]="option?.value"-->
      <!--          [attr.disabled]="option.disabled"-->
      <!--          >{{ option.label | translate }}</ng-option-->
      <!--        >-->
      <!--      </ng-select>-->
      {{ control.value }}
      <input
        class="d-none form-control"
        [value]="control.value"
        type="text"
        placeholder="''"
      />
      <label
      >{{ field.label | translate }}
        <sup *ngIf="field.required">*</sup></label
      >
      <div class="error-message" *ngIf="control.invalid && control.errors">
        {{ control.errors['msg'] | translate : control.errors['params'] || {} }}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    TranslateModule
  ]
})
export class SelectFieldComponent
  extends FieldAbstractComponent<SelectField>
  implements OnInit
{
  isOpen = false;
 override ngOnInit(): void {
    super.ngOnInit();
  }
  // toggleSelect(select: NgSelectComponent) {
  //   if (this.isOpen) {
  //     this.closeSelect(select);
  //   } else {
  //     this.openSelect(select);
  //   }
  //   this.isOpen = !this.isOpen;
  // }
  // customSearchFn(options: { value: any; label: string }[]) {
  //   const ids = options.reduce((pre, cur) => {
  //     pre[cur.value] = cur;
  //     return pre;
  //   }, {});
  //    return (text: string, key: string) => searchStr(ids[key].label, text);
  // }
  // onChangeSelectValue(select: NgSelectComponent) {
  //   setTimeout(() => {
  //     this.closeSelect(select);
  //   }, 120);
  // }
  // openSelect(select: NgSelectComponent) {
  //   select.open();
  // }
  //
  // closeSelect(select: NgSelectComponent) {
  //   select.close();
  // }
}
