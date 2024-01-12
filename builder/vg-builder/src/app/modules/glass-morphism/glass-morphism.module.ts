import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiBgComponent } from './ui-bg/ui-bg.component';
import { GlassMorphismComponent } from './glass-morphism/glass-morphism.component';
import { MorphismAppComponent } from './morphism-app/morphism-app.component';
const UI_COMPONENTS = [
  UiBgComponent,
  GlassMorphismComponent,
  MorphismAppComponent
 ];
@NgModule({
  imports: [CommonModule, ...UI_COMPONENTS],
  exports: [...UI_COMPONENTS],
})
export class GlassMorphismModule {}
