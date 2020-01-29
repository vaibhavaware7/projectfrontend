import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {
name:any;
  constructor() { }

  ngOnInit() {
    this.name=localStorage.getItem('name');
  }

}
