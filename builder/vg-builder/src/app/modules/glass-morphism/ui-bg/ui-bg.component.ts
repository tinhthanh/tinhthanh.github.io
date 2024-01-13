import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-ui-bg',
  templateUrl: './ui-bg.component.html',
  styleUrls: ['./ui-bg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiBgComponent {}
