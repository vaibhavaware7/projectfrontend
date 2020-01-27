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
  god:any;
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit() 
  {
    document.getElementById('myDiv').style.visibility="hidden"
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
  Reject(uid)
  {
    debugger;
    let observableResult= this.service.Reject(uid);
    observableResult.subscribe((result)=>{

      if(result==true)
      {
        alert('User is Removed..!!')
        this.router.navigate(['/admin/adminhome'])
      }else{
        alert('Removal Failed..!!')
        this.router.navigate(['/admin/adminhome'])
        
      }
    })
  }
  ViewDetails(uid)
  {
    document.getElementById('myDiv').style.visibility="visible";
    let observableResult= this.service.GetUserById(uid);
    observableResult.subscribe((result)=>{

      if(isNull(result))
      {
        alert('User Not Found..!!')
        this.router.navigate(['/admin/adminhome'])
      }else{
        this.god=result;
      }
    })
  }
}
