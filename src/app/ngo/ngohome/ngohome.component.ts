import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngohome',
  templateUrl: './ngohome.component.html',
  styleUrls: ['./ngohome.component.css']
})
export class NgohomeComponent implements OnInit {

  name:any;
  constructor() { }

  ngOnInit() 
  {
    this.name=localStorage.getItem('name');
  }

}
