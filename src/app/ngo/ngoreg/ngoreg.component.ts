import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngoreg',
  templateUrl: './ngoreg.component.html',
  styleUrls: ['./ngoreg.component.css']
})
export class NgoregComponent implements OnInit {

  name;email;phoneno;city;state;country;password;
  ngoname;ngocity;ngostate;ngocountry;ngophoneno;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onRegister()
  {
    alert('Your registration request has been generated . You account will be activated within 48 hours. Thank You');
    this.router.navigate(['/home']);
  }
}
