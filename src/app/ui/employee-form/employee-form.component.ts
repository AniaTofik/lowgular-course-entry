import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
    });

  constructor(private _employeeService: EmployeeService) {
  }

  onButtonClicked(form: { name: string, age: string, salary: string }) {
    alert(`User was successfully added to the database. Name: ${form.name}, age: ${form.age}, salary: ${form.salary}$.`);
  }
  onEmployeeFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create(form).subscribe((form:any)=>{
      alert('sukces');
    });
  }

}
