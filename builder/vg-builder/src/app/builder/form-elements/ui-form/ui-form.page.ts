import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ElBase } from "../../el-base";
import { UiForm } from "../../element.ui";
import { FormFieldModule } from "../../../modules/form-field/form-field.module";

@Component({
    selector: 'app-ui-form',
    template: `
     @if(uiElement && uiElement.config) {
        <app-form-group [config]="uiElement.config" [patchValue]="uiElement.patchValue"  (submitEvent)="submit($event)" ></app-form-group>
      }
    `,
    styleUrl: 'ui-form.page.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormFieldModule]
})
export class UiFormPage extends ElBase<UiForm<any>> {
    submit($event: any) {
        console.log($event);
    }
}