import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
import { CheckBoxField } from '../../../form.field';
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  standalone: true,
  selector: 'app-checkbox-field',
  template: `
    <div *ngIf="field" class="form-group form-floating">
      <div>
        <label>
          <input
            class="form-check-input"
            type="checkbox"
            [formControl]="control"
          />
          <div class="checkbox"></div>
          <div class="form-check-label">
            {{ field.label | translate }}
          </div>
        </label>
        <div class="error-message" *ngIf="control.invalid && control.errors">
          {{ control.errors['msg'] | translate : control.errors['params'] || {} }}
        </div>
      </div>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgIf,
    TranslateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxFieldComponent extends FieldAbstractComponent<CheckBoxField> implements OnInit {
override  ngOnInit(): void {
    super.ngOnInit();
  }
}
