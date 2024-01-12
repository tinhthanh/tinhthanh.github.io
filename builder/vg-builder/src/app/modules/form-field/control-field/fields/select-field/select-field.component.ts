import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldComp } from '../field-comp.directive';
import { SelectField } from '../../../form.field';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  standalone: true,
  selector: 'app-select-field',
  template: `
  @if (field) {
    <div  class="form-group form-floating">
      <input
        class=" form-control"
        [value]="control.value"
        type="text"
        placeholder="''"
      />
      <label
        >{{ field.label | translate }}
        @if(field.required) {
        <sup>*</sup>
        }
      </label>
      @if(control.invalid && control.errors) {
      <div class="error-message">
        {{ control.errors['msg'] | translate : control.errors['params'] || {} }}
      </div>
      }
    </div>
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
})
export class SelectFieldComponent
  extends FieldComp<SelectField>
  implements OnInit
{
  isOpen = false;
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
