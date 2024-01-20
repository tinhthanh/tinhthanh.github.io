import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IonLabel , IonItem , IonAccordion, IonAccordionGroup} from "@ionic/angular/standalone";
@Component({
    selector: 'app-setting-element',
    styleUrls: ['./setting-element.page.scss'],
    templateUrl: './setting-element.page.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonLabel , IonItem , IonAccordion, IonAccordionGroup
  ]
})
export class SettingElementPage {

}
