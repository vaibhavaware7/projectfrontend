import { Injectable } from '@angular/core';

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    debugger;
   if(this.IsLoggedIn())
   {
     console.log("User Has Logged in");
     return true;
   }
   else
   {
    console.log("User has not logged");
     this.router.navigate(['/home']);
     return false;  
   }
  }

  IsLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       window.sessionStorage.getItem("isActive")=="1")
    {
      // some logic to check if person has logged in
      return true;
    }
    else{
      return false;
    }
  }

  CheckCredentialsWithDB(credentials)
  {
    debugger;
    //Call Some  Service using Post Method
    //to check credentials with DB 
    if(credentials.email == "abc" && credentials.password == "abc@123")
    {
      window.sessionStorage.setItem("isActive", "1");
      return true;
    }
    else
    {
      return false;
    }
  }

  Logout()
  {
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/home']);
  }
}
