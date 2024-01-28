import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
@Component({
  selector: 'app-routers-page',
  template: `<ng-container #vcr></ng-container>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutersPage implements OnInit {
  readonly cdf = inject(ChangeDetectorRef);
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  ngOnInit(): void {
    this.routers();
  }
  async routers() {
    this.vcr.clear();
    const path = window.location.pathname;
    if (path === '/') {
      // for home page
      const cp = await import('../home/home.page').then((m) => m.HomePage);
      this.vcr.createComponent(cp);
    } else if (path === '/builder') {
      // for home page
      const cp = await import('../builder/builder.page').then((m) => m.UiBuilderPage);
      this.vcr.createComponent(cp);
    } else if(path === '/render') {
      const cp = await import('../vg-builder/vg-builder.page').then((m) => m.VgBuilderPage);
      this.vcr.createComponent(cp);
    } else if(path === '/embedded') {
      const cp = await import('../builder/embedded/embedded.page').then((m) => m.EmbeddedPage);
      this.vcr.createComponent(cp);
    }
    this.cdf.detectChanges();
  }
}
