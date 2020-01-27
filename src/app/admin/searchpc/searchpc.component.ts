import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { isNull } from 'util';
import { Router } from '@angular/router';
import { PoliceService } from 'src/app/police.service';

@Component({
  selector: 'app-searchpc',
  templateUrl: './searchpc.component.html',
  styleUrls: ['./searchpc.component.css']
})
export class SearchpcComponent implements OnInit {

  name;
  vic:any;  
  constructor(private router:Router, private service:PoliceService) { }

  ngOnInit() 
  {
    document.getElementById('myDiv').style.visibility="hidden";
  }
  onSearch()
  {
    debugger;

    document.getElementById('myDiv').style.visibility="visible";
    let observableResult = this.service.GetCaseByName(this.name);
    observableResult.subscribe((result)=>{
      console.log(result);
      if(!isNull(result))
      {
        this.vic=result;
      }
      else{
        alert('Case not Found')
        this.router.navigate(['/admin/searchpc'])
      }
      
    })
  }
}
