import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
export enum ActionType {
  CANCEL = 'cancel',
  OK = 'ok',
  CLOSE = 'close'
}
@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDeleteComponent {
  readonly ActionType =  ActionType;
  @Output() vgEvent = new EventEmitter<ActionType>();
  constructor() { }


}
