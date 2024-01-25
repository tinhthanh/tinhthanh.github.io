import { Directive, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ColorPickerInlinePage } from './color-picker-inline.page';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appColorPic]'
})
export class ColorPicDirective implements OnInit, OnDestroy {
  constructor( private control: NgControl,private el: ElementRef, private popoverController: PopoverController) {}

  ngOnInit(): void {
    if(this.control && this.control?.value) {
      console.log(this.control.value)
      this.el.nativeElement.style.color =  this.control?.value;
    }
  }
  ngOnDestroy(): void {
    console.log('destroy nek')
  }

  @HostListener('click', ['$event']) onClick($event: Event) {
    $event.stopPropagation();
    $event.preventDefault();
    this.openColorPicker($event);
  }

  private async openColorPicker($event: Event) {
    let color = null;
    if(this.control) {
      color = this.control.value;
    }
    console.log(this.control)
    const popover = await this.popoverController.create({
      component: ColorPickerInlinePage,
      translucent: true,
      event: $event,
      componentProps: {
        color: color,
        colorPickerSelect: {emit : (color: string) => {
          console.log(color);
          if(this.control) {
            this.control.control?.setValue(color);
            this.el.nativeElement.style.color = color;
          }
          popover.dismiss();
        }}
      }
    });

    await popover.present();
    await popover.onWillDismiss();
  }
}
