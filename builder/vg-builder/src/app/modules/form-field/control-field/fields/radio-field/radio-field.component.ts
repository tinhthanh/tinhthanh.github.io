import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FieldAbstractComponent } from '../field.abstract.component';
import { RadioField } from '../../../form.field';
import {NgForOf, NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-radio-field',
  styleUrls: ['./radio-field.component.scss'],
  template: `
    <div
      *ngIf="field"
      class="form-group form-floating"
    >
      <div class="pb-2 label-field">
        {{ field.label | translate }}
        <sup *ngIf="field.required">*</sup>
      </div>
      <form class="inline">
        <div class="field-control">

          <div class="radio-wrapper">
            <ng-container *ngIf="field.options && field.options.length > 0">
              <ng-container *ngFor="let option of field.options">
                <label [for]="field.name + uuid" class="radio">
                  <input
                    [name]="field.name + uuid"
                    [formControl]="control"
                    [value]="option.value"
                    type="radio"
                  />
                  <svg viewBox="0 0 24 24" filter="url(#goo-light)">
                    <circle class="top" cx="12" cy="-12" r="8"/>
                    <circle class="dot" cx="12" cy="12" r="5"/>
                    <circle class="drop" cx="12" cy="12" r="2"/>
                  </svg>
                  <div class="form-check-label">
                    {{ option.label | translate }}
                  </div>
                </label>
              </ng-container>
            </ng-container>
          </div>
        </div>
      </form>
      <div class="error-message" *ngIf="control.invalid && control.errors">
        {{ control.errors['msg'] | translate : control.errors['params'] || {} }}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    TranslateModule,
    ReactiveFormsModule,
    NgForOf
  ]
})
export class RadioFieldComponent extends FieldAbstractComponent<RadioField> implements OnInit , AfterViewInit{
  ngAfterViewInit(): void {
  // fix for required field
  setTimeout(() => {
    this.markForCheck();
  }, 100)
  }
  uuid = Math.random();
 override ngOnInit(): void {
    super.ngOnInit();
    this.control.registerOnChange(() => {
      console.log('change')
    })
  }
}
