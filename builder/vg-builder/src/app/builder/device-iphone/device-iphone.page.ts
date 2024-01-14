import { ChangeDetectionStrategy, Component } from "@angular/core";


@Component({
    selector: 'app-device-iphone',
    templateUrl: 'device-iphone.page.html',
    styleUrls: ['./device-iphone.page.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceIphonePage {
    
}