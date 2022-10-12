import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      salary: new FormControl('', Validators.required)
    });

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
  }
  onButtonClicked(form: {name: string, age: string, salary: string}){
    alert(`User was successfully added to the database. Name: ${form.name}, age: ${form.age}, salary: ${form.salary}$.`);
  }

}
