import { Injectable } from '@angular/core';

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CommondataService } from './commondata.service';
import { isNull } from 'util';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  emp:any;

  constructor(private router:Router,private service:CommondataService) { }

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

  CheckCredentialsWithDB(user)
  {
    
    //Call Some  Service using Post Method
    //to check credentials with DB
    let observableResult= this.service.validateUser(user);
    observableResult.subscribe((result)=>{
      
      this.emp=result
      debugger;
      if(!isNull(this.emp))
      {   
      
        if(this.emp.role=="ADMIN" && this.emp.stat=="V")
        {
          
         sessionStorage['login_status'] = '1';
         localStorage.setItem('email',this.emp.email);
         localStorage.setItem('flag','true');
         this.router.navigate(['/admin']);
        }
        else if(this.emp.role=="POLICE" && this.emp.stat=="V")
        {
   
            sessionStorage['login_status'] = '1';
            localStorage.setItem('email',this.emp.email);
            localStorage.setItem('flag','true');
            this.router.navigate(['/policehome/police']);
        }
         else if(this.emp.role=="NGO" && this.emp.stat=="V")
        {
   
            sessionStorage['login_status'] = '1';
            localStorage.setItem('email',this.emp.email);
            localStorage.setItem('flag','true');
            this.router.navigate(['/ngo']);
        }
        else
        {
           alert("invalid login");
           this.router.navigate(['']);
        }
       }
       else
       {
         debugger;
         return "invalid";
       }
     
      
    })
  }

  Logout()
  {
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/home']);
  }
}
