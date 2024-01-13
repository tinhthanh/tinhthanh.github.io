import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-routers-page',
  template: `<ng-container #vcr></ng-container>`,
  standalone: true,
})
export class RoutersPage implements OnInit {
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
    } else {
    }
  }
}
