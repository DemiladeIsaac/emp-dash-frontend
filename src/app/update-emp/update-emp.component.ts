import { Component, OnInit } from '@angular/core';
import { EmpModel } from '../employee.model';
import { EmpService } from '../employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  empData:EmpModel[];

  constructor(private empService:EmpService) { }

  ngOnInit(): void {
    this.empService.getEmp().subscribe((data) => {
      this.empData = data;
    })
  }

}
