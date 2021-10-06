import { Component, OnInit } from '@angular/core';
import { EmpModel } from '../employee.model';
import { EmpService } from '../employee.service';

@Component({
  selector: 'app-emp-dir',
  templateUrl: './emp-dir.component.html',
  styleUrls: ['./emp-dir.component.css']
})
export class EmpDirComponent implements OnInit {
  empData:EmpModel[];
  filterTerm:string;

  constructor(private empService:EmpService) { }

  ngOnInit(): void {
    this.empService.getEmp().subscribe((data) => {
      this.empData = data;
    })
  }

}
