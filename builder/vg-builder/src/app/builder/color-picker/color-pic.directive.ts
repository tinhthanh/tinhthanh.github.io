import { Directive, HostListener } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ColorPickerInlinePage } from './color-picker-inline.page';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appColorPic]'
})
export class ColorPicDirective {
  constructor( private control: NgControl, private popoverController: PopoverController) {}
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
          }
          popover.dismiss();
        }}
      }
    });

    await popover.present();
    await popover.onWillDismiss();
  }
}
