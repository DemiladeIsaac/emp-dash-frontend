import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WebRequestService } from "../web-request.service";
import { SignUp } from "./registration.model";

const AUTH_API = 'http://localhost:3000/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
}

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    constructor(private http:HttpClient){}

    login(data:SignUp): Observable<any> {
        return this.http.post(AUTH_API + 'signin',data,httpOptions);
    }

    register(data:SignUp): Observable<any> {
        return this.http.post(AUTH_API + 'signup',data,httpOptions);
    }
}