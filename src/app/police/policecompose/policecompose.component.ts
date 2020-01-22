import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/ngo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policecompose',
  templateUrl: './policecompose.component.html',
  styleUrls: ['./policecompose.component.css']
})
export class PolicecomposeComponent implements OnInit {

  god={ngouseremail:"",fromuseremail:"",messagebody:""}
  constructor(private service:NgoService,private router:Router) { }

  ngOnInit() 
  {
    this.god.ngouseremail=localStorage.getItem('ngemail');
    this.god.fromuseremail=localStorage.getItem('email');
  }

  Send()
  {
    let observableResult = this.service.SendMessage(this.god);
    observableResult.subscribe((result)=>{
      if(result == true)
      {
        alert('Message Send Successfully');
        this.router.navigate(['/policehome/police']);
      }
      else
      {
        alert('OOPS ! Message Sending Failed');
        this.router.navigate(['/policehome/police']);
      }

    })
  }

}
