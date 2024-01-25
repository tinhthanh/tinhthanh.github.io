import { Component, EventEmitter, Host, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-color-picker-inline',
  template: `
    <span
      [cpWidth]="'250px'"
      [cpToggle]="true"
      [cpDialogDisplay]="'inline'"
      [cpOKButton]="true"
      [colorPicker]="color"
      (colorPickerChange)="cpInputChange($event)"
      (colorPickerSelect)="eventClose($event)"
    >
    </span>
  `,
  styles: `
    :host {
      ::ng-deep {
        .color-picker {
        border: 0px;
        .cp-ok-button-class {
          border: 1px solid var(--ion-color-primary);
          padding: 4px;
          border-radius: 4px;
          color: var(--ion-color-primary);
        }
       }
      }
    }
  `
})
export class ColorPickerInlinePage {
  private formControl!: FormControl;
  @Input() color:  string = '#22577e';
  @Output() colorPickerSelect: EventEmitter<string> = new EventEmitter<string>();
  setFormControl(formControl: FormControl) {
    this.formControl = formControl;
  }
  cpInputChange(color: string) {
    console.log(color);
    if (this.formControl) {
      this.formControl.setValue(color);
    }
  }
  eventClose($event: any) {
    console.log($event);
    this.colorPickerSelect.emit($event);
  }
}
