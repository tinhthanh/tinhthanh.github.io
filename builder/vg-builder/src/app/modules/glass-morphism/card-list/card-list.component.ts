import { KeyValuePipe, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { AppItem } from '../../../db/entitys';
import { ViewImgPipe } from '../../..//pipes/view-img.pipe';
import { AppService } from 'src/app/db/app.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IonIcon, ModalController, PopoverController } from "@ionic/angular/standalone";

import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';
import { FormCrudAppComponent } from '../../../forms/form-crud-app/form-crud-app.component';
import { ActionPopoverComponent, TypeEmit } from './action-popover/action-popover.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { take } from 'rxjs';
@Component({
  standalone: true,
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonIcon,
    KeyValuePipe,
    NgStyle,
    ViewImgPipe
  ]
})
export class CardListComponent  {
  private modalCtrl =  inject(ModalController);
  private popover = inject(PopoverController);
  readonly appDb = inject(AppService);
  list = toSignal<AppItem[]>(this.appDb.getAll());
  constructor() {
    addIcons({
      'add-circle' : addCircle
    })
  }
  orderOriginal = () => 0;

  async confirmDetele(): Promise< {data: any, role: string} | any> {
    const modal = await this.modalCtrl.create({
      component: ConfirmDeleteComponent,
      cssClass: 'custom-popup',
      componentProps: {
        vgEvent: {
          emit: (data: any) => {
            console.log(data);
            modal.dismiss(data);
          }
        }
      }
    });
    modal.present();
   return modal.onWillDismiss();
  }
  async onCrud(item?: AppItem ) {
    const modal = await this.modalCtrl.create({
      component: FormCrudAppComponent,
      cssClass: 'custom-popup',
      componentProps: {
        data: item,
        vgSubmit: {
          emit: (data: any) => {
            console.log(data);
            this.appDb.addOrUpdate(data).pipe(take(1)).subscribe();
            // STORE DB
            this.modalCtrl.dismiss()
          }
        }
      }
    });
    modal.present();
    await modal.onWillDismiss();
  }
  async presentPopover(e: Event, item: AppItem) {
    const popover = await this.popover.create({
      component: ActionPopoverComponent,
      event: e,
      mode: 'ios',
      componentProps:
       { vgEvent : { emit : (action: string) => {
        if(action === 'delete') {
          this.confirmDetele().then((e) => {
            console.log(e);
            if(e.data === TypeEmit.delete && item.id) {
              this.appDb.deleteById(item.id).then()
            }
          })
        }
        if(action === TypeEmit.setting) {
          this.onCrud(item).then();
        }
        popover.dismiss();
      }} } });
    await popover.present();
    await popover.onDidDismiss();
  }
}
