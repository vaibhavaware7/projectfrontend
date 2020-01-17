import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



    email;
    password;

  message;
  constructor(private authService:AuthService,
    private router: Router) { }
  ngOnInit() {
  }

  SignIn() {
    debugger;
   // let dbuser = this.authService. CheckCredentialsWithDB(this.user);
   if (this.email.length == 0) 
   {
    alert('enter email');
    }
   else if (this.password.length ==0)
    {
     alert('enter password');
    } 
    else {
  
    if(this.email=='Admin')
    {
        sessionStorage['login_status'] = '1';
        localStorage.setItem('email',this.email);
        localStorage.setItem('flag','true');
        this.router.navigate(['/admin']);
    }
    else if(this.email=='Police')
    {
      
        sessionStorage['login_status'] = '1';
        localStorage.setItem('email',this.email);
        localStorage.setItem('flag','true');
        this.router.navigate(['/police']);
    }else if(this.email=='Ngo')
    {
        sessionStorage['login_status'] = '1';
        localStorage.setItem('email',this.email);
        localStorage.setItem('flag','true');
        this.router.navigate(['/ngo']);
    }else{
      alert("invalid login");
      this.router.navigate(['']);
      this.message="invalid login please retry";
    }
    }
  }

  RegisterAsPolice()
   {
    console.log("inside police register");

    this.router.navigate(['/policereg']);
  }

  RegisterAsNgo()
   {
    console.log("inside ngo register");

    this.router.navigate(['/ngoreg']);
  }
}
