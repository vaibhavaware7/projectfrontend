import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from 'src/app/commondata.service';

@Component({
  selector: 'app-policreg',
  templateUrl: './policreg.component.html',
  styleUrls: ['./policreg.component.css']
})
export class PolicregComponent implements OnInit 
{
 god={name:"",email:"",phoneno:"",city:"",state:"",country:"",password:"",
  deptname:"",deptcity:"",deptstate:"",deptcountry:"",deptphoneno:"",role:"POLICE"};
  image:any;
  constructor(private router:Router,private service:CommondataService) { }
  onSelectFile(event) {
    this.image = event.target.files[0];}
  ngOnInit() {
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
}
