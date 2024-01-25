import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  IonLabel,
  IonItem,
  IonAccordion,
  IonAccordionGroup,
  IonGrid,
  IonRow,
  IonCol,
  IonRange, IonList, IonInput, IonToggle, IonRadioGroup, IonRadio, IonIcon,
  IonContent,
  IonButton
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {sunnyOutline, phonePortrait, phonePortraitOutline, desktopOutline, desktop}  from 'ionicons/icons';
import { BuilderSignals } from "../signals/builder.signals";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from "@angular/forms";
import { ControlsOf, FormType, BuilderType } from "../../modules/form-field/form.builder";
import { ColorPicModule } from "../color-picker/color-pic.module";
export interface DefaultSetting {
  width: number | null,
  height: number | null,
  fillColor: string | null,
  borderColor: string | null,
  borderRadius: number | null,
  borderWidth: number | null,
  opacity: number | null,
  padding: number | null,

}
export const DefaultSettingFields = () : { [K in keyof DefaultSetting]: BuilderType<DefaultSetting> } => {
  return {
    width: 'width',
    height: 'height',
    fillColor: 'fillColor',
    borderColor: 'borderColor',
    borderRadius: 'borderRadius',
    borderWidth: 'borderWidth',
    opacity: 'opacity',
    padding: 'padding',
  }
}

@Component({
    selector: 'app-setting-element',
    styleUrls: ['./setting-element.page.scss'],
    templateUrl: './setting-element.page.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonGrid, IonRow, IonCol, IonRange, IonList, IonInput, IonToggle, IonRadioGroup, IonRadio, IonIcon,
    ReactiveFormsModule,
    IonContent,
    ColorPicModule,
    IonButton
  ]
})
export class SettingElementPage {
  readonly DefaultSettingFields = DefaultSettingFields();
  readonly builderSignals = inject(BuilderSignals);
  readonly currentNodeActive = this.builderSignals.select('currentNodeActive');

  formGroup: FormType<DefaultSetting> = new FormGroup<ControlsOf<DefaultSetting>>({
    width: new FormControl(null,
      [Validators.required,cssValidator(this.DefaultSettingFields.width) ]),
    height: new FormControl(null, [Validators.required, cssValidator(this.DefaultSettingFields.height)]),
    fillColor: new FormControl("#22577e"),
    borderColor: new FormControl(null),
    borderRadius: new FormControl(null),
    borderWidth: new FormControl(null,[cssValidator(this.DefaultSettingFields.borderWidth)]),
    opacity: new FormControl(null),
    padding: new FormControl(null),
  });
constructor() {
 addIcons({
   'sunny-outline': sunnyOutline,
   'phone-portrait-outline': phonePortraitOutline,
   'phone-portrait': phonePortrait,
   'desktop-outline': desktopOutline,
   'desktop': desktop
 })
}
  pinFormatter(value: number) {
    return `${value}%`;
  }
  pxFormatter(value: number) {
    return `${value}px`;
  }
  log() {
    console.log('render app-setting-element');
  }
}
export function cssValidator(property:  keyof DefaultSetting): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    if (!isValidCss(property)(value)) {
      return { 'invalid': { value } };
    }

    return null;
  };
}

const isValidCss = (type: keyof DefaultSetting) => (value: string): boolean  =>{
  const property: any = convertToCSSProperty(type);
  // Kiểm tra xem giá trị có phù hợp với định dạng CSS width hay không
  const element = document.createElement('div');
  element.style[property] = value;

  // Kiểm tra giá trị của style.width để xem nó có được áp dụng thành công hay không
  return element.style[property] !== '';
}

const convertToCSSProperty = (input: string): string => {
  return input.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
}
