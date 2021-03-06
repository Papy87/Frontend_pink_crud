import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { query } from '@angular/animations';

  

  
  @Injectable({ providedIn: 'root' })
  export class AuthGuard implements CanActivate {
    constructor(  private authService:AuthService,private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Promise<boolean | UrlTree>
      | Observable<boolean | UrlTree> {
   if(localStorage.getItem("token")===null){

    return true;
   }else {
   return this.router.navigate(['/']);
   }
    }
  }
  