import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-allcases',
  templateUrl: './allcases.component.html',
  styleUrls: ['./allcases.component.css']
})
export class AllcasesComponent implements OnInit 
{
  cases:any;
  constructor(private router:Router,private service:AdminService) { }

  ngOnInit() 
  {
    let observableResult=this.service.GetAllCases();
    observableResult.subscribe((result)=>{
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
