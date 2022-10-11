import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employee-img',
  templateUrl: './employee-img.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeImgComponent {
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>( 'assets/data/employees.json');
  constructor(private _client: HttpClient)  {
  }

}
