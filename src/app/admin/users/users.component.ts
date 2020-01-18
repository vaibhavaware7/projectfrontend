import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist={id:"",name:"",email:"",phone:"",image:""}
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
