import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { UiPagePage } from '../page-elements/ui-page.page';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-review-page',
  template: `
    @if(urlSafe) {
    {{ log() }}
    <iframe (load)="iframeLoaded()" [src]="urlSafe" [height]="'100%'" [width]="'100%'"></iframe>
    }
  `,
  imports: [UiPagePage],
  styles: `
    :host {
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewPagePage  {
  readonly url: string = `${window.location.origin}/embedded`;
  readonly sanitizer = inject(DomSanitizer);
  urlSafe: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  @Output() loaded = new EventEmitter<void>();
  log() {
    console.log('app-review-page');
  }
  iframeLoaded() {
    this.loaded.emit();
  }
}
