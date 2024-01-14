import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-chrome-browser',
    styleUrls: ['./chrome-browser.page.scss'],
    templateUrl: './chrome-browser.page.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChromeBrowserPage {
    
} 