import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from "./form-group/form-group.component";
@NgModule({
  imports: [
    CommonModule,
    FormGroupComponent
  ],
  exports: [FormGroupComponent],
  providers: [
  ],
})
export class FormFieldModule {}
