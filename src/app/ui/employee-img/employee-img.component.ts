import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-img',
  templateUrl: './employee-img.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeImgComponent {
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {
  }

}
