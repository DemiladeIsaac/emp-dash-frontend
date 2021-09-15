import { Component, OnInit } from '@angular/core';
import { SignUpService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMsg = '';

  constructor(private regService:SignUpService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    console.log(data);
    this.regService.register(data).subscribe((data) => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },err => {
      this.errorMsg = err.error.message;
      this.isSignUpFailed = true;
    })
  }

}
