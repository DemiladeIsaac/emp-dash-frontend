import { Injectable } from "@angular/core";
import { EmpModel } from "./employee.model";
import { WebRequestService } from "./web-request.service";


@Injectable({
    providedIn: 'root'
})
export class EmpService {
    constructor(private webReqService:WebRequestService){}

    createEmp(data:EmpModel){
        // const formData = new FormData();
        // formData.append('file',data.imageFile);
        // formData.append('name',data.name);
        // formData.append('age',data.age);
        // formData.append('job_description',data.job_description);
        // formData.append('salary',data.salary);
        // formData.append('department',data.department);
        return this.webReqService.post('emp/new',data);
    }

    getEmp() {
        return this.webReqService.get('emp/getEmp');
    }

    getOneEmp(id) {
        return this.webReqService.get(`emp/getOne/${id}`);
    }

    updateEmp(id,data:EmpModel){
        return this.webReqService.patch(`emp/update/${id}`,data);
    }

    delEmp(id) {
        return this.webReqService.delete(`emp/deleteEmp/${id}`);
    }
}