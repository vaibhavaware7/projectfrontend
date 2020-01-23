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
  deptname:"",deptcity:"",deptstate:"",deptcountry:"",deptphoneno:"",role:"NGO"};
  
  constructor(private router:Router,private service:CommondataService) { }

  ngOnInit() {
  }

  onRegister()
  {
    let observableResult = this.service.Register(this.god);
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
}
