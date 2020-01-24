import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-ngusers',
  templateUrl: './ngusers.component.html',
  styleUrls: ['./ngusers.component.css']
})
export class NgusersComponent implements OnInit {

  userlist:any;
  constructor(private router:Router,private service:AdminService)
   { }

  ngOnInit()
  {
    let observableResult= this.service.GetAllUsers();
    observableResult.subscribe((result)=>{
      this.userlist=result;
    })
  }

  SendMessage(email)
  {
    sessionStorage.setItem('useremail',email);
    this.router.navigate(['/ngo/ngocompose']);
  }
 
}
