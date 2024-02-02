import { ChangeDetectionStrategy, Component, EventEmitter,  Output, ViewEncapsulation, signal } from '@angular/core';
import { VgLoginComponent } from 'vg-web-ui';
import { UserRegister, VgAuthService, VgStore } from 'vg-web-sdk';
const clientKey = "AKfycbwjothv_MjUfNyuy2k0wqy-mJFSIoGAN3FnjRZ_f_uSHMwVPiyM8EoTlwnuuiKE9wTZOw";
import { IonToast} from '@ionic/angular/standalone'
interface UserModel {
  name?: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  template: `
   <ion-toast
    [color]="'danger'"
    [isOpen]="isToastOpen()"
    [message]="message()"
    [duration]="5000"
    (didDismiss)="setOpen(false)"
  ></ion-toast>
  <vg-login [vgLoading]="loading()" (vgSignIn)="signIn($event)" (vgSignUp)="signUp($event)" ></vg-login>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    VgLoginComponent,
    IonToast
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent {
  loading = signal(false);
  isToastOpen = signal(false);
  message = signal('');
  signUp(data: UserModel) {
    console.log(data);
    const api = new VgAuthService(clientKey);
    this.loading.set(true);
    const user: UserRegister = {
      id: null || '',
      displayName: data.name || '',
      email: data.email,
      password: data.password,
    } as UserRegister;
    api.register(user).then((rs ) => {
       console.log(rs);
       this.loading.set(false);
       if(rs.status !== 200) {
         this.setOpen(true);
         if(rs.errors) {
          this.message.set(rs.errors['message']);
         }
       } else {

       }
    })
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen.set(isOpen);
  }
  signIn(data: any) {
    const api = new VgAuthService(clientKey);
    this.loading.set(true);
    api.login(data.email, data.password).then((rs ) => {
       console.log(rs);
       this.loading.set(false);
       if(rs.status !== 200) {
         this.setOpen(true);
         if(rs.errors) {
          this.message.set(rs.errors['message']);
         }
       }
    })
  }
}
