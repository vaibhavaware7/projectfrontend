import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { isNull } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user={email:"",password:""}
   message="";
   emp:any;
  constructor(private authService:AuthService,
    private router: Router) { }
  ngOnInit() {
  }

  SignIn() {
    debugger;
     this.emp= this.authService. CheckCredentialsWithDB(this.user);
      this.router.navigate(['']);
  
  }

  checkResponse()
  {
     var res =window.confirm("Before proceeding to registration "+ 
    "page make sure you are a valid police employee."+
    " After registration our team will verify if entered details belong to offical employee serving mentioned "+
    "police department. "+" If found any invalid information, your data will be sent to cyber security department and proper action will be taken against you."+
    " Press OK if you agree terms or Cancel if you dont want to proceed further.")

    if(res== true)
    {
     this.RegisterAsPolice();
    }
    
  }
  RegisterAsPolice()
   {
    console.log("inside police register");

    this.router.navigate(['/policereg']);
  }
  checkResponseNgo()
  {
    var res =window.confirm("Before proceeding to registration "+ 
    "page make sure you are working for registered NGO realted to Human Trafficking Victims."+
    " After registration our team will verify if entered details belong to offical employee serving mentioned "+
    "NGO . "+" If found any invalid information, your data will be sent to cyber security department and proper action will be taken against you."+
    " Press OK if you agree terms or Cancel if you dont want to proceed further.")

    if(res== true)
    {
     this.RegisterAsNgo();
    }
  }
  RegisterAsNgo()
   {
    console.log("inside ngo register");

    this.router.navigate(['/ngoreg']);
  }
}
