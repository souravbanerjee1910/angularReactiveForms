import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.employeeForm?.value);
  }
}
