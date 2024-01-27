import { ChangeDetectionStrategy, Component, EventEmitter, Injector, Output, Signal, effect, inject } from "@angular/core";
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
  IonButton,
  IonSelect,
  IonSelectOption
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {sunnyOutline, phonePortrait, phonePortraitOutline, desktopOutline, desktop, caretDownSharp, caretUpSharp}  from 'ionicons/icons';
import { BuilderSignals } from "../signals/builder.signals";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn } from "@angular/forms";
import { ControlsOf, FormType, BuilderType } from "../../modules/form-field/form.builder";
import { ColorPicModule } from "../color-picker/color-pic.module";
import { debounceTime, distinctUntilChanged, map } from "rxjs";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isEqual } from "../fuc-utils";
import { IElementUi } from "../element.ui";
import { toObservable } from '@angular/core/rxjs-interop';
type CssProperty = string | any;

export const DefaultSettingFields  : { [K in keyof Partial<CSSStyleDeclaration>]: BuilderType<Partial<CSSStyleDeclaration>> } = {
    width: 'width',
    height: 'height',
    webkitTextFillColor: 'webkitTextFillColor',
    borderColor: 'borderColor',
    borderRadius: 'borderRadius',
    borderWidth: 'borderWidth',
    opacity: 'opacity',
    padding: 'padding',
    backgroundColor : 'backgroundColor',
    margin: 'margin',
    // flex container
    display : 'display',
    flexDirection: 'flexDirection',
    flexWrap: 'flexWrap',
    justifyContent: 'justifyContent',
    alignItems: 'alignItems',
    alignContent: 'alignContent',

    // flex items
    order: 'order',
    flex: 'flex',
    alignSelf: 'alignSelf',

    // background img
    backgroundImage :'backgroundImage',
    backgroundRepeat: 'backgroundRepeat',
    backgroundAttachment: 'backgroundAttachment',
    backgroundPosition: 'backgroundPosition',
    backgroundSize : 'backgroundSize',

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
    IonButton,
    IonSelect,
    IonSelectOption
  ]
})
export class SettingElementPage  {
  readonly DefaultSettingFields = DefaultSettingFields as { [K in keyof CSSStyleDeclaration]: BuilderType<CSSStyleDeclaration> };
  readonly builderSignals = inject(BuilderSignals);
  readonly currentNodeActive = this.builderSignals.select('currentNodeActive');
  @Output() vgUpdateNode = new EventEmitter<IElementUi>();
  formGroup: FormType<Partial<CSSStyleDeclaration>> = new FormGroup<ControlsOf<Partial<CSSStyleDeclaration>>>(Object.keys(DefaultSettingFields).reduce((pre, curr ) => ({...pre, [curr]: new FormControl<CssProperty>(null, [cssValidator(curr as keyof CSSStyleDeclaration )] )}), {}));
  constructor() {
  addIcons({
   'sunny-outline': sunnyOutline,
   'phone-portrait-outline': phonePortraitOutline,
   'phone-portrait': phonePortrait,
   'desktop-outline': desktopOutline,
   'desktop': desktop,
   'caret-down-sharp' : caretDownSharp,
   'caret-up-sharp' : caretUpSharp
 });
 // watch current node change
 toObservable(this.currentNodeActive).pipe(
  takeUntilDestroyed()
 ).subscribe( it => {
  console.log(it);
  if(it) {
    const patchValue: any = it.style || {}
    Object.keys(DefaultSettingFields).forEach( key => {
      const control = this.formGroup.get(key);
      if(control) {
          control.setValue(patchValue[key] || null)
      }
    })
    // this.formGroup.patchValue(it.style, {emitEvent: false});
  }
 })
this.formGroup.valueChanges.pipe(
    debounceTime(300),
      map((it) =>
        Object.keys(it).reduce( (pre, curr) => {
          const control =  this.formGroup.get(curr);
          if(control && control.valid && control.value !== '' && control.value !== null) {
              return {...pre, [curr]: control.value } ;
          }
          return pre;
      }, {})
     ),
    distinctUntilChanged(isEqual),
    takeUntilDestroyed()
 ).subscribe( (it) => {
  console.log(it);
  const activeNode: IElementUi | null = this.currentNodeActive() as IElementUi; ;
  if(activeNode) {
    this.vgUpdateNode.emit({...activeNode, style: it})
    console.log(this.currentNodeActive())
  }
 });
}
  pinFormatter(value: number) {
    return `${value}`;
  }
  pxFormatter(value: number) {
    return `${value}px`;
  }
  log() {
    console.log('render app-setting-element');
  }
}
export function cssValidator(property:  keyof CSSStyleDeclaration | undefined): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    if (value && property && !isValidCss(property)(value)) {
      return { 'invalid': { value } };
    }
    return null;
  };
}
const isValidCss = (type: keyof CSSStyleDeclaration) => (value: string): boolean  =>{
  const element = document.createElement('div');
  element.style[type as any] = value;
  return element.style[type as any] !== '';
}
