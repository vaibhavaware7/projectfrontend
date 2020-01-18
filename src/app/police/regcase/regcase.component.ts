import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regcase',
  templateUrl: './regcase.component.html',
  styleUrls: ['./regcase.component.css']
})
export class RegcaseComponent implements OnInit {

  name;age;height;bg;city;state;country;gendor;dob;missdate;compnum;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onRegister()
  {
    alert('Case registration Successfull ..');
    this.router.navigate(['/police']);
  }
}
