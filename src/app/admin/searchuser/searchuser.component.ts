import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  email:any;
  god:any;
  constructor(private service :AdminService,private router:Router) { }

  ngOnInit() {
    document.getElementById('myDiv').style.visibility="hidden"
  }
  onSearch()
  {
    let observableResult= this.service.GetUser(this.email);
    observableResult.subscribe((result)=>{
      console.log(result);
      if(isNull(result))
      {
        alert('User Not Found')
        this.router.navigate(['/admin/adminhome'])
      }
      else{

    document.getElementById('myDiv').style.visibility="visible"
        this.god=result;
      }
    })
    }
}
