import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliceService } from 'src/app/police.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  vic:any;
  username="";
  constructor(private router:Router,private service:PoliceService) { }

  ngOnInit()
  {
    var element=document.getElementById("myDiv");
    element.style.visibility="hidden";
  }
  onSearch()
  {
    debugger;
    document.getElementById("myDiv").style.visibility="visible"
     let obervableResult= this.service.GetCaseByName(this.username);
     obervableResult.subscribe((result)=>{
       console.log(result);
       this.vic=result;
     })
  }
}
