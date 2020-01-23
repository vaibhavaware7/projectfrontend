import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addngpo',
  templateUrl: './addngpo.component.html',
  styleUrls: ['./addngpo.component.css']
})
export class AddngpoComponent implements OnInit {

  god={name:"",city:"",state:"",country:"",phoneno:"",role:""}
  constructor(private service:AdminService,private router:Router)
  { }

  ngOnInit() 
  {
  }
  
  AddDept()
  {
    debugger;
    let observableResult = this.service.AddDept(this.god);
    observableResult.subscribe((result)=>{
      if(result == true)
      {
        alert('Department Added Successfully ...')
        this.router.navigate(['/admin/adminhome'])
      }
      else{

        alert('OOPS ! Operation Failed ...')
        this.router.navigate(['/admin/adminhome'])
      }
    })
  }

}
