import {ChangeDetectionStrategy, Component} from "@angular/core";
import {IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList} from "@ionic/angular/standalone";

@Component({
  selector: 'app-select-el',
  templateUrl: './select-ui.page.html',
  styleUrls: ['./select-ui.page.scss'],
  standalone: true,
  imports: [
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonList
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectUiPage {

}
