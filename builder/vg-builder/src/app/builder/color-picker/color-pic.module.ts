import { NgModule } from "@angular/core";
import { ColorPickerInlinePage } from "./color-picker-inline.page";
import { ColorPickerModule } from "ngx-color-picker";
import { ColorPicDirective } from "./color-pic.directive";
import { PopoverController } from '@ionic/angular';
@NgModule({
  imports: [ColorPickerModule],
  exports: [ColorPicDirective],
  declarations: [ColorPickerInlinePage, ColorPicDirective],
  providers: [PopoverController],
})
export class ColorPicModule { }
