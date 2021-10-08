import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../Service/Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GloginGuard implements CanActivate {
  constructor(private router:Router,private loginservice:LoginService){}
  canActivate(): boolean{
   if(this.loginservice.eslogueado()){
     return true;
   }
   else{
     location.reload();
     this.router.navigate(['/header'])
    return false;
  }
  
}
}