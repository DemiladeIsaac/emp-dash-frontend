import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../registration/registration.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMsg = '';
  roles:string[] = [];

  constructor(private regService:SignUpService,private tokenStorage:TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

    onSubmit(data): void {
    //const { username, password } = this.form;

    this.regService.login(data).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        //this.router.navigate(['/dashboard']);
        
      },
      err => {
        this.errorMsg = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

   reloadPage(): void {
    window.location.reload();
  }
}
