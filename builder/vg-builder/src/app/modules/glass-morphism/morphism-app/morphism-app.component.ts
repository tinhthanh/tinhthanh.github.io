import { ChangeDetectionStrategy, Component } from "@angular/core";
import {NgClass} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-morphism-app',
  templateUrl: './morphism-app.component.html',
  styleUrls: ['./morphism-app.component.scss'],
  imports: [
    NgClass
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MorphismAppComponent {
  darkMode = false;

  changeDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
