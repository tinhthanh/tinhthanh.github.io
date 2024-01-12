import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
import { CheckBoxField } from '../../../form.field';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-checkbox-field',
  template: `
    @if(field) {
    <div class="form-group form-floating">
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
        @if(control.invalid && control.errors) {
        <div class="error-message">
          {{
            control.errors['msg'] | translate : control.errors['params'] || {}
          }}
        </div>
        }
      </div>
    </div>
    }
  `,
  imports: [ReactiveFormsModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxFieldComponent
  extends FieldAbstractComponent<CheckBoxField>
  implements OnInit
{
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
