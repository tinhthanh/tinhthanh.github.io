import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
import { InputNumberField } from '../../../form.field';
import { ValidatorStr, toValidator } from '../../../form.validation';
import {NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  standalone: true,
  selector: 'app-number-field',
  template: `
    <div *ngIf="field" class="form-group form-floating">
      <input
        [placeholder]="field.placeholder || ''"
        type="tel"
        class="form-control"
        [formControl]="control"
        [attr.name]="field.name"
        mask="separator" thousandSeparator=","
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
    NgxMaskDirective,
    TranslateModule
  ]
})
export class NumberFieldComponent
  extends FieldAbstractComponent<InputNumberField>
  implements OnInit
{
override ngOnInit(): void {
    super.ngOnInit();
    if(this.field?.min) {
      this.control.addValidators(toValidator[ValidatorStr.min](this.field));
    }
    if(this.field?.max) {
      this.control.addValidators(toValidator[ValidatorStr.max](this.field));
    }
  }
}
