import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliceService } from 'src/app/police.service';

@Component({
  selector: 'app-regcase',
  templateUrl: './regcase.component.html',
  styleUrls: ['./regcase.component.css']
})
export class RegcaseComponent implements OnInit {

  victim={name:"",age:"",gendor:"",height:"",bgrp:"",dob:"",missingDate:"",complainantNo:""}
  address={city:"",state:"",country:"",phoneno:""}
  constructor(private router:Router,private service:PoliceService) { }

  ngOnInit() 
  {
  }
  onRegister()
  {
   let observableResult= this.service.FileComplaint(this.victim,this.address);
   debugger;  
    observableResult.subscribe((result)=>{
      if(result==true)
      {
        alert('Case Registered Successfully ...')
        this.router.navigate(['/policehome/police'])
      }
      else
      {
        alert('Case Registration Falied')
        this.router.navigate(['/policehome/regcase'])
        
      }
    })
  }
}
