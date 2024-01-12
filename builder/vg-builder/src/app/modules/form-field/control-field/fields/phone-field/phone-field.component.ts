import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
import { PhoneField } from '../../../form.field';
import { toValidator, ValidatorStr } from '../../../form.validation';
import {NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {NgxMaskDirective} from "ngx-mask";

@Component({
  standalone: true,
  selector: 'app-phone-field',
  template: `
    <div
      *ngIf="field"
      class="form-group form-floating"
    >
      <input
        [placeholder]="field.placeholder || ''"
        type="tel"
        class="form-control"
        [formControl]="control"
        [attr.name]="field.name"
        mask="(000) 000 0000 || (000) 0000 0000"
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
    ReactiveFormsModule,
    TranslateModule,
    NgxMaskDirective
  ]
})
export class PhoneFieldComponent
  extends FieldAbstractComponent<PhoneField>
  implements OnInit
{
override ngOnInit(): void {
    super.ngOnInit();
    this.control.addValidators(
      toValidator[ValidatorStr.phone](this.field)
    );
  }
}
