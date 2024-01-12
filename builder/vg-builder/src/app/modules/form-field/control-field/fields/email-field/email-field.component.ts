import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
import { EmailField } from '../../../form.field';
import { ValidatorStr, toValidator } from '../../../form.validation';
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  standalone: true,
  selector: 'app-email-field',
  template: `
    <div *ngIf="field" class="form-group form-floating">
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
    ReactiveFormsModule,
    NgIf,
    TranslateModule
  ]
})
export class EmailFieldComponent extends FieldAbstractComponent<EmailField> implements OnInit {
override ngOnInit(): void {
    super.ngOnInit();
    this.control.addValidators(
      toValidator[ValidatorStr.email](this.field)
    );
  }
}
