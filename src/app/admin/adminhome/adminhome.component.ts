import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  name:any;
  constructor() { }

  ngOnInit() 
  {
    this.name=localStorage.getItem('name');
  }

}
