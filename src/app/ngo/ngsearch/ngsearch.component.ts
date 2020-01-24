import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliceService } from 'src/app/police.service';

@Component({
  selector: 'app-ngsearch',
  templateUrl: './ngsearch.component.html',
  styleUrls: ['./ngsearch.component.css']
})
export class NgsearchComponent implements OnInit {

  vic:any;
  name="";
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
     let obervableResult= this.service.GetCaseByName(this.name);
     obervableResult.subscribe((result)=>{
       console.log(result);
       this.vic=result;
     })
  }

}
