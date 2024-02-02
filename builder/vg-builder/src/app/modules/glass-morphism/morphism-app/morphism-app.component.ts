import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
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
  darkMode =  signal(false) ;

  changeDarkMode(): void {
    this.darkMode.update( old => !old) ;
  }
}
