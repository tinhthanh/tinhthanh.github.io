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
      this.applyAttributes();
    }
  }

  private clearStyles() {
    // Xóa tất cả các thuộc tính CSS
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
  private applyAttributes() {
    if (this.appStyles && this.appStyles?.attributes) {
      const attributes: any = this.appStyles?.attributes || {};
      Object.keys(attributes).forEach((attribute: string) => {
        this.renderer.setAttribute(this.el.nativeElement, attribute, attributes[attribute]);
      });
    }
  }
}
