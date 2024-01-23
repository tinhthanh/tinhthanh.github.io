import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  IonLabel,
  IonItem,
  IonAccordion,
  IonAccordionGroup,
  IonGrid,
  IonRow,
  IonCol,
  IonRange, IonList, IonInput, IonToggle, IonRadioGroup, IonRadio, IonIcon
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {sunnyOutline, phonePortrait, phonePortraitOutline, desktopOutline, desktop}  from 'ionicons/icons';
import { BuilderSignals } from "../signals/builder.signals";
@Component({
    selector: 'app-setting-element',
    styleUrls: ['./setting-element.page.scss'],
    templateUrl: './setting-element.page.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonGrid, IonRow, IonCol, IonRange, IonList, IonInput, IonToggle, IonRadioGroup, IonRadio, IonIcon
  ]
})
export class SettingElementPage {
  readonly bSignals = inject(BuilderSignals);
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
