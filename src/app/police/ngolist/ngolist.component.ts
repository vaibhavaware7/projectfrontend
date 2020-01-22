import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/ngo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngolist',
  templateUrl: './ngolist.component.html',
  styleUrls: ['./ngolist.component.css']
})
export class NgolistComponent implements OnInit 
{
  ngolist:any;
  constructor(private service:NgoService,private router:Router) { }

  ngOnInit() 
  {
    let observableResult= this.service.NgoList();
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
