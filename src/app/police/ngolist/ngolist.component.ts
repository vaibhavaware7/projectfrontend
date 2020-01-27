import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/ngo.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-ngolist',
  templateUrl: './ngolist.component.html',
  styleUrls: ['./ngolist.component.css']
})
export class NgolistComponent implements OnInit 
{
  ngolist:any;
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit() 
  {
    let observableResult= this.service.GetAllUsers();
    observableResult.subscribe((result)=>{
      this.ngolist= result;
    })
  }

  SendMessage(email)
  {
    localStorage.setItem('ngemail',email);
    this.router.navigate(['/policehome/compose']);
  }
}
