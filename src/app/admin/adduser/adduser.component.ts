import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CommondataService } from 'src/app/commondata.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  god={name:"",email:"",phoneno:"",city:"",state:"",country:"",password:"",
  deptname:"",deptcity:"",deptstate:"",deptcountry:"",deptphoneno:"",role:""};
  
  constructor(private router:Router,private service:CommondataService) { }

  ngOnInit() {
  }

  onRegister()
  {
    console.log(this.god);
    let observableResult = this.service.Register(this.god);
    observableResult.subscribe((result)=>{
      if(result== true)
      {
        alert(' User Added check your request section');
         this.router.navigate(['/admin/adminhome']);
  
      }
      else{
        alert('Account Creation Failed !! Try again ...');
        this.router.navigate(['/admin/adminhome']);
 
      }
    })
    }
}
