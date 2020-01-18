import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  name;email;password;city;country;state;phoneno;
  constructor( private router:Router) { }

  ngOnInit() {
  }
  onRegister()
  {
    alert('user is added...')
    this.router.navigate(['/admin']);
  }
}
