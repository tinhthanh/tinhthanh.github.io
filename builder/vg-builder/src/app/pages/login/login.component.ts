import { ChangeDetectionStrategy, Component, EventEmitter,  Output, ViewEncapsulation, inject, signal } from '@angular/core';
import { VgLoginComponent } from 'vg-web-ui';
import { UserRegister } from 'vg-web-sdk';
import { IonToast} from '@ionic/angular/standalone'
import { AuthService } from '../../auth/auth.service';
import { RoutersService } from '../../routers/routers.service';
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
  readonly router = inject(RoutersService);
  auth = inject(AuthService);
  loading = signal(false);
  isToastOpen = signal(false);
  message = signal('');
  signUp(data: UserModel) {
    console.log(data);
    this.loading.set(true);
    const user: UserRegister = {
      id: null || '',
      displayName: data.name || '',
      email: data.email,
      password: data.password,
    } as UserRegister;
    this.auth.register(user).then((rs ) => {
       console.log(rs);
       this.loading.set(false);
       if(rs.status !== 200) {
         this.setOpen(true);
         if(rs.errors) {
          this.message.set(rs.errors['message']);
         }
       } else {
        this.router.push('home');
       }
    })
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen.set(isOpen);
  }
  signIn(data: any) {
    this.loading.set(true);
    this.auth.login(data.email, data.password).then((rs ) => {
       console.log(rs);
       this.loading.set(false);
       if(rs.status !== 200) {
         this.setOpen(true);
         if(rs.errors) {
          this.message.set(rs.errors['message']);
         }
       } else {
        this.router.push('home');
       }
    })
  }
}
