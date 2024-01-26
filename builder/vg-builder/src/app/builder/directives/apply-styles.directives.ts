import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { IElementUi } from '../element.ui';

@Directive({
  selector: '[appStyles]',
  standalone: true
})
export class ApplyStylesDirective implements OnChanges {
  @Input() appStyles!: IElementUi  ;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['appStyles']) {
      this.clearStyles();
      this.renderStyles();
    }
  }
  private clearStyles() {
    for (let i = 0; i < this.el.nativeElement.style.length; i++) {
      const property = this.el.nativeElement.style[i];
      this.renderer.removeStyle(this.el.nativeElement, property);
    }
  }
  private renderStyles() {
    if (this.appStyles && this.appStyles?.style) {
      const styles: any = this.appStyles?.style || {};
      console.log(styles);
      Object.keys(styles).forEach((property: string) => {
          this.renderer.setStyle(this.el.nativeElement, property, styles[property]);
      });
    }
  }
}
