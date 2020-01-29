import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from 'src/app/commondata.service';

@Component({
  selector: 'app-ngoreg',
  templateUrl: './ngoreg.component.html',
  styleUrls: ['./ngoreg.component.css']
})
export class NgoregComponent implements OnInit {

  god={name:"",email:"",phoneno:"",city:"",state:"",country:"",password:"",
  deptname:"",deptcity:"",deptstate:"",deptcountry:"",deptphoneno:"",role:"NGO",otp:""};
  image:any;
  constructor(private router:Router,private service:CommondataService) { }
  onSelectFile(event) {
    this.image = event.target.files[0];}
  ngOnInit() {
  }
  onVerify()
  {
    let observbleResult= this.service.GenerateOtp(this.god.email);
    observbleResult.subscribe((result)=>{
      alert('Please Check your email')
      this.god.otp = prompt('Please Enter OTP which is mailed to you')
      if(this.god.otp == "" || this.god.otp ==null)
      {
        alert('Registration Failed')

      }else{
      
        this.onRegister();
      }
        
    })
  }
  onRegister()
  {
    let observableResult = this.service.Register(this.god,this.image);
    observableResult.subscribe((result)=>{
      if(result== true)
      {
        alert('Your registration request has been generated . You account will be activated within 48 hours. Thank You !!');
         this.router.navigate(['/home']);
  
      }
      else{
        alert('Account Creation Failed !! Try again ...');
        this.router.navigate(['/home']);
 
      }
    })
    }

    GoHome()
    {
      var ans= confirm('Are you sure you want to go back all entered details will be lost..')
    if(ans == true)
    {
      this.router.navigate(['/home']);
  
    }
    }
  }

