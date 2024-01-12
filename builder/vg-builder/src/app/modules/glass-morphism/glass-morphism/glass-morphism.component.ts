import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-glass-morphism',
  templateUrl: './glass-morphism.component.html',
  styleUrls: ['./glass-morphism.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlassMorphismComponent {}
