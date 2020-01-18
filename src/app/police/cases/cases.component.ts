import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  userlist={id:"",name:"",city:"",age:"",image:""}
  constructor() { }

  ngOnInit() {
  }

}
