import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
  Update(uid)
  {

  }
  SendMessage(email)
  {

  }
  Remove(uid)
  {

  }
}
