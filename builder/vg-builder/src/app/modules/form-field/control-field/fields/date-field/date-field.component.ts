import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FieldAbstractComponent } from '../field.abstract.component';
import { format, parse } from 'date-fns';
import { of } from 'rxjs';
import { toValidator, ValidatorStr } from '../../../form.validation';
import { DateField } from '../../../form.field';
import {formatDate} from "../../../db-utils";
import {NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {TranslateModule} from "@ngx-translate/core";
import {IonContent, IonDatetime, IonIcon, IonModal} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {  calendarOutline } from "ionicons/icons";
addIcons({
  "calendar-outline": calendarOutline,
});
@Component({
  standalone: true,
  selector: 'app-date-field',
  template: `
    @if (field) {
      <div  class="form-group form-floating">
        <input
          type="tel"
          class="form-control"
          [formControl]="control"
          placeholder="dd/MM/yyyy"
          [attr.name]="field.name"
          mask="00/00/0000"
          [dropSpecialCharacters]="false"
        />
        <ion-icon (click)="openModal()" name="calendar-outline"></ion-icon>
        <label class="form-check-label"
        >{{ field.label | translate }}
          <sup *ngIf="field.required">*</sup></label
        >
        <div class="error-message" *ngIf="control.invalid && control.errors">
          {{ control.errors['msg'] | translate : control.errors['params'] || {} }}
        </div>
      </div>
    }

    <ion-modal
      [canDismiss]="closePopup"
      [isOpen]="isModalOpen"
      style=" --background: transparent;"
    >
      <ng-template>
        <ion-content style=" --background: transparent;">
          <ion-datetime
            mode="ios"
            #popoverDatetime
            style="margin: 0 auto;"
            [value]="currentDate"
            (ionChange)="valueDateChange(popoverDatetime.value)"
            [locale]="locale"
            presentation="date"
          ></ion-datetime>
        </ion-content>
      </ng-template>
    </ion-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgxMaskDirective,
    TranslateModule,
    IonIcon,
    IonModal,
    IonContent,
    IonDatetime
  ]
})
export class DateFieldComponent
  extends FieldAbstractComponent<DateField>
  implements OnInit
{
  readonly locale = 'vi';
  isModalOpen = false;
  currentDate:string | null = null;
  constructor(private cdf: ChangeDetectorRef) {
    super();
  }

 override ngOnInit(): void {
    super.ngOnInit();
    this.control.addValidators(
      toValidator[ValidatorStr.date](this.field)
    );
  }
  openModal(): void {
    if (this.control.value && this.control.valid) {
      this.currentDate = formatDate(
        parse(this.control.value, 'dd/MM/yyyy', new Date())
      );
    }
    this.isModalOpen = true;
    this.cdf.markForCheck();
  }
  closePopup = async () => {
    this.isModalOpen = false;
    this.cdf.markForCheck();
    return of(true).toPromise();
  };

  valueDateChange(value:string | string[] | null | undefined): void {
    if (!value) {return;}
    const date = new Date(value as string);
    const dateStr = format(date, 'dd/MM/yyyy');
    console.log(dateStr);
    this.control.setValue(dateStr);
    this.isModalOpen = false;
    this.cdf.markForCheck();
  }
}
