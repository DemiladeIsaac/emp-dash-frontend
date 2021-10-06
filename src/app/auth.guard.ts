import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   isLoggedIn = false;
   constructor(
    public tokenService: TokenStorageService,
    public router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedIn = !!this.tokenService.getToken();
      if (this.isLoggedIn !== true) {
      window.alert("Access not allowed!");
      this.router.navigate(['/login'])
    }
    return true;
  }
}