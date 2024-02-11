import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonList, IonPopover, IonItem, IonContent } from "@ionic/angular/standalone";
export enum TypeEmit {
  setting = 'setting',
  release = 'release',
  delete = 'delete'
}
@Component({
  selector: 'app-action-popover',
  templateUrl: './action-popover.component.html',
  styleUrls: ['./action-popover.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonItem, IonPopover,IonList ]
})
export class ActionPopoverComponent {
  readonly TypeEmit = TypeEmit
  @Output() vgEvent = new EventEmitter<TypeEmit>();
}
