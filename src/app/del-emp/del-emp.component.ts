import { Component, OnInit } from '@angular/core';
import { EmpModel } from '../employee.model';
import { EmpService } from '../employee.service';

@Component({
  selector: 'app-del-emp',
  templateUrl: './del-emp.component.html',
  styleUrls: ['./del-emp.component.css']
})
export class DelEmpComponent implements OnInit {
  empData:EmpModel[];

  constructor(private empService:EmpService) { }

  ngOnInit(): void {
    this.empService.getEmp().subscribe((data) => {
      this.empData = data;
    })
  }

  delEmp(id:String){
    this.empService.delEmp(id).subscribe(() => {
      console.log("Deleted successfully");
      window.location.reload();
    })
  }

}
