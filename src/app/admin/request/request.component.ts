import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  userlist:any;
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit() 
  {
    let observableResult= this.service.GetAllRequests();
    observableResult.subscribe((result)=>{
      if(isNull(result))
      {
        alert('No new Requests !!!')
        this.router.navigate(['/admin/adminhome'])
      }
      else{
        this.userlist=result;
      }
    })
  }
  Verify(uid)
  {
    let observableResult= this.service.Verify(uid);
    observableResult.subscribe((result)=>{

      if(result==true)
      {
        alert('User is Verified..!!')
        this.router.navigate(['/admin/adminhome'])
      }else{
        alert('Verification Failed..!!')
        this.router.navigate(['/admin/adminhome'])
        
      }
    })
  }
}
