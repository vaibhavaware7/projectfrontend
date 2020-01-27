import { Component, OnInit } from '@angular/core';
import { PoliceService } from 'src/app/police.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngupdate',
  templateUrl: './ngupdate.component.html',
  styleUrls: ['./ngupdate.component.css']
})
export class NgupdateComponent implements OnInit {
  god={uid:"",email:"",name:"", city:"",state:"",phoneno:""}
  constructor(private service:PoliceService,private router:Router)
   { }

  ngOnInit()
  {
    this.god.uid=localStorage.getItem('uid');
    this.god.name=localStorage.getItem('name');
    this.god.email=localStorage.getItem('email');
    this.god.city=localStorage.getItem('city');
    this.god.state=localStorage.getItem('state');
    this.god.phoneno=localStorage.getItem('phoneno');
  }

  onUpdate()
  {

    let observableResult =this.service.UpdateProfile(this.god);
    observableResult.subscribe((result)=>{
      if(result == true)
      {
        alert('Profile Updated Successfully')
        this.router.navigate(['/ngo/ngohome'])
      }
      else{
        alert('OOPS !! Profile Updation Failed ... ')

        this.router.navigate(['/ngo/ngohome'])
      }
    })  
  
  }
}
