import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policreg',
  templateUrl: './policreg.component.html',
  styleUrls: ['./policreg.component.css']
})
export class PolicregComponent implements OnInit 
{
  name;email;phoneno;city;state;country;password;
  deptname;deptcity;deptstate;deptcountry;deptphoneno;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onRegister()
  {
    alert('Your registration request has been generated . You account will be activated within 48 hours. Thank You');
    this.router.navigate(['/home']);
  }
}
