import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  god={name:"",email:"",phoneno:"",role:"",city:"",state:"",country:"",password:""}
  constructor( private router:Router,private service:AdminService) { }

  ngOnInit() {
  }
  onRegister()
  { 
    let observableRessult= this.service.AddUser(this.god);
    observableRessult.subscribe((result)=>{
      if(result==true)
      {
        alert('User Added SuccessFully !')
        this.router.navigate(['/admin/adminhome']);
      }
      else{
        alert('User Registration Failed !..')
        this.router.navigate(['/admin/adminhome']);
        
      }
    })
    }
}
