import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router,private auth : AuthService)
  {
 }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn =  localStorage.getItem('isLoggedIn');
      if(!isLoggedIn){
        return true;
      }else{
        if(isLoggedIn=='si'){ 
          this.router.navigate(['tabs/home'])       
          return false;
        }else{
          return true;
        }
      }
      
  }
  
}
