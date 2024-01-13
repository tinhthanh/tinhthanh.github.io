import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-setting-element',
    styleUrls: ['./setting-element.page.scss'],
    templateUrl: './setting-element.page.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingElementPage {

}