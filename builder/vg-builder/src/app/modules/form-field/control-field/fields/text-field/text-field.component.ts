import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
import { TextField } from '../../../form.field';
import { ValidatorStr, toValidator } from '../../../form.validation';
import {NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  standalone: true,
  selector: 'app-text-field',
  template: `
    <div
      *ngIf="field"
      class="form-group form-floating"
    >
      <input
        type="text"
        class="form-control"
        [formControl]="control"
        [placeholder]="field.placeholder || ''"
        [attr.name]="field.name"
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
    TranslateModule
  ]
})
export class TextFieldComponent extends FieldAbstractComponent<TextField> implements OnInit {
override  ngOnInit(): void {
    super.ngOnInit();
    if(this.field?.maxLength) {
      this.control.addValidators(toValidator[ValidatorStr.maxLength](this.field));
    }
    if(this.field?.minLength) {
      this.control.addValidators(toValidator[ValidatorStr.minLength](this.field));
    }
  }
}
