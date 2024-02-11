import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { RoutersService } from './routers.service';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

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
  readonly router = inject(RoutersService);
  constructor() {
    toObservable(this.router.current).pipe(
      takeUntilDestroyed()
    ).subscribe( cp => {
      if(cp) {
        this.vcr.clear();
        this.vcr.createComponent(cp);
        this.cdf.markForCheck();
      }
    })
  }
  ngOnInit(): void {
    this.routers();
  }
  async routers() {
    this.vcr.clear();
    const path = window.location.pathname;
    if (path === '/') {
      this.router.push('home');
    } else if (path === '/builder') {
      this.router.push('builder');
    } else if(path === '/render') {
      this.router.push('render');
    } else if(path === '/embedded') {
      this.router.push('embedded');
    } else if(path === '/login') {
      this.router.push('login');
    }
    this.cdf.detectChanges();
  }
}
