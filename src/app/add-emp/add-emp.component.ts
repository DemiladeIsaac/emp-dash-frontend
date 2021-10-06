import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmpService } from '../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  message = '';
  isSuccessful = false;
  isRegFailed = false;
  errorMsg = '';

   form: FormGroup;
   imageFile: File = null;
   name = '';
   age = '';
   job_description = '';
   salary = '';
   department = '';

  constructor(public empService:EmpService,private fb:FormBuilder) { }

  ngOnInit(): void {
     this.form = this.fb.group({
      name:[null,Validators.required],
      age:[null,Validators.required],
      job_description: [null,Validators.required],
      salary: [null,Validators.required],
      department: [null,Validators.required],
      imageFile: [null,Validators.required]
    })
  }

  addEmp() {
    console.log(this.form.value);
    this.empService.createEmp(this.form.value).subscribe(data => {
      this.isSuccessful = true;
      this.isRegFailed = false;
      this.message = data.msg;
    },err => {
      this.errorMsg = err.error.message;
      this.isRegFailed = true;
    })
  }

}
