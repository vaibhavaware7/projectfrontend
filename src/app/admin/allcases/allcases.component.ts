import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { PoliceService } from 'src/app/police.service';

@Component({
  selector: 'app-allcases',
  templateUrl: './allcases.component.html',
  styleUrls: ['./allcases.component.css']
})
export class AllcasesComponent implements OnInit 
{
  cases:any;
  constructor(private router:Router,private service:AdminService,private serv :PoliceService) { }

  ngOnInit() 
  {
    let observableResult=this.serv.GetAllCases();
    observableResult.subscribe((result)=>{
      console.log(result)
      this.cases=result;
    })
  }
  RemoveCase(appNo)
  {
    alert('Are you sure you want to remove this case permanetly ? Make Sure its status is FOUND');
    let observableResult= this.service.Remove(appNo);
    observableResult.subscribe((result)=>{
      if(result == true)
      {
        alert('Case Removed Permantly')
        this.router.navigate(['/admin/adminhome'])
      }
      else
      {
        alert('Case Removal Failed')
        this.router.navigate(['/admin/adminhome'])
        
      }
    })
  }
}
