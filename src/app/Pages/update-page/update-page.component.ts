import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { EmpModel } from 'src/app/employee.model';
import { EmpService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  @ViewChild('updateEmp') updateForm:NgForm;
  isSuccessful = false;
  isUpdateFailed = false;
  msg = '';
  errorMsg = '';
  id;

  constructor(private empService:EmpService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = params.id;
      if(params.id){
        this.empService.getOneEmp(params.id).subscribe((data) => {
          //console.log(data.name);
          this.updateForm.setValue({
          name:data.name,
          age:data.age,
          job_description:data.job_description,
          salary:data.salary,
          department:data.department
        })
        })
      }else {
        console.log('No id can be found');
      }
    })

  }

  onSubmit(data){
    this.empService.updateEmp(this.id,data).subscribe((data) => {
      this.msg = data.msg;
      this.isSuccessful = true;
      this.isUpdateFailed = false;
    },err => {
      this.isUpdateFailed = true;
      this.errorMsg = err.error.message;
    })
  }

}
