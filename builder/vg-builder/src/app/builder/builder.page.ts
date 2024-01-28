import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { TreeElementPage } from './tree-element/tree-element.page';
import { SettingElementPage } from './setting-element/setting-element.page';
import { ReviewPagePage } from './review-page/review-page.page';
import { ChromeBrowserPage } from './chrome-brower/chrome-browser.page';
import { DeviceIphonePage } from './device-iphone/device-iphone.page';

import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  desktopOutline,
  sunnyOutline,
  moonOutline,
  phonePortraitOutline,
} from 'ionicons/icons';
import { NgClass } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { BuilderSignals } from './signals/builder.signals';
import { DeviceType, ThemeType } from './types';
import { mockPage } from './signals/mock.data';
@Component({
  selector: 'app-ui-builder',
  template: `
    <as-split direction="horizontal">
      <as-split-area [minSize]="20" [size]="20">
        <app-tree-element></app-tree-element>
      </as-split-area>
      <as-split-area [size]="60">
        <div class="builder-review relative">
          <div
            class="tab-device absolute flex items-center space-x-4 z-50 right-3 rounded-4 p-2 bg-[#ededed] "
          >
            <ion-icon
              [ngClass]="{ active: DeviceType.MOBILE === deviceMode() }"
              (click)="changeDevice(DeviceType.MOBILE)"
              name="phone-portrait-outline"
              class="active text-2xl border border-gray-500 rounded-full p-2 hover:bg-gray-500 active:bg-gray-500 cursor-pointer"
            ></ion-icon>
            <ion-icon
              [ngClass]="{ active: DeviceType.DESKTOP === deviceMode() }"
              (click)="changeDevice(DeviceType.DESKTOP)"
              name="desktop-outline"
              class="text-2xl border border-gray-500 rounded-full p-2 hover:bg-gray-500 active:bg-gray-500 cursor-pointer"
            ></ion-icon>
            <ion-icon
              [ngClass]="{ active: ThemeType.DARK === themeMode() }"
              (click)="changeTheme(ThemeType.DARK)"
              name="sunny-outline"
              class="text-2xl border border-gray-500 rounded-full p-2 hover:bg-gray-500 active:bg-gray-500 cursor-pointer"
            ></ion-icon>
            <ion-icon
              [ngClass]="{ active: ThemeType.LIGHT === themeMode() }"
              (click)="changeTheme(ThemeType.LIGHT)"
              name="moon-outline"
              class="active text-2xl border border-gray-500 rounded-full p-2 hover:bg-gray-500 active:bg-gray-500 cursor-pointer"
            ></ion-icon>
          </div>
          @if(deviceMode() == DeviceType.DESKTOP) {
          <app-chrome-browser>
            <app-review-page (loaded)="iframeLoaded()"></app-review-page>
          </app-chrome-browser>
          } @if(deviceMode() == DeviceType.MOBILE) {
          <app-device-iphone>
            <app-review-page (loaded)="iframeLoaded()"></app-review-page>
          </app-device-iphone>
          }
        </div>
      </as-split-area>
      <as-split-area [minSize]="20" [size]="20">
        <app-setting-element></app-setting-element>
      </as-split-area>
    </as-split>
  `,
  styles: [
    ` .tab-device {
        color: var(--ion-text-color, #000);
      }
      .active {
        background-color: grey;
      }
      .builder-review {
        flex: 1;
        padding: 10px;
      }
    `,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TreeElementPage,
    SettingElementPage,
    ReviewPagePage,
    ChromeBrowserPage,
    DeviceIphonePage,
    IonIcon,
    NgClass,
    AngularSplitModule,
  ],
  providers: [BuilderSignals]
})
export class UiBuilderPage implements OnInit {
  readonly DeviceType = DeviceType;
  readonly ThemeType = ThemeType;
  readonly builderSignals = inject(BuilderSignals);
  readonly deviceMode = this.builderSignals.select('deviceMode');
  readonly themeMode = this.builderSignals.select('themeMode');


  constructor() {
    addIcons({
      'desktop-outline': desktopOutline,
      'sunny-outline': sunnyOutline,
      'moon-outline': moonOutline,
      'phone-portrait-outline': phonePortraitOutline,
    });
    this.builderSignals.set('deviceMode', DeviceType.DESKTOP);
    this.builderSignals.set('themeMode', ThemeType.LIGHT);
    this.builderSignals.set('parentNode' ,mockPage );
  }
  changeDevice(device: DeviceType): void {
    this.builderSignals.set('deviceMode', device);
  }
  changeTheme(theme: ThemeType): void {
    this.builderSignals.set('themeMode', theme);
  }
  ngOnInit(): void {
    console.log('init');
  }
  iframeLoaded() {
    console.log('iframeLoaded');
    const parentNode = this.builderSignals.select('parentNode');
    this.builderSignals.set('deviceMode',this.deviceMode());
    this.builderSignals.set('themeMode', this.themeMode());
    this.builderSignals.set('parentNode' ,parentNode() );
  }
}

