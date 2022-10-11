import { NgModule } from '@angular/core';
import { EmployeeImgComponent } from './employee-img.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeImgComponent],
  providers: [],
  exports: [EmployeeImgComponent]
})
export class EmployeeImgComponentModule {
}
