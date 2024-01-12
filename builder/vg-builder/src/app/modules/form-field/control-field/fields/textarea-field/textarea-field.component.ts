import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
import { TextareaField } from '../../../form.field';
import { ValidatorStr, toValidator } from '../../../form.validation';
import {NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  standalone: true,
  selector: 'app-textarea-field',
  template: `
    <div *ngIf="field"
         class="form-group form-floating"
    >
      <textarea
        class="form-control"
        [style]="
          'min-height: ' +
          (field.minHeight ? field.minHeight : 104) +
          'px'
        "
        [id]="field.name"
        [placeholder]="field.placeholder || ''"
        [formControl]="control"
        [attr.name]="field.name"
      >
      </textarea>
      <label
      >{{ field.label  | translate}}
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
export class TextareaFieldComponent extends FieldAbstractComponent<TextareaField>  implements OnInit {
  override ngOnInit(): void {
    super.ngOnInit();
    if(this.field?.maxLength) {
      this.control.addValidators(toValidator[ValidatorStr.maxLength](this.field));
    }
    if(this.field?.minLength) {
      this.control.addValidators(toValidator[ValidatorStr.minLength](this.field));
    }
  }
}
