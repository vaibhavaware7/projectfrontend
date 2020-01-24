import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/ngo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngocompose',
  templateUrl: './ngocompose.component.html',
  styleUrls: ['./ngocompose.component.css']
})
export class NgocomposeComponent implements OnInit {

  god={ngouseremail:"",fromuseremail:"",messagebody:""}
  constructor(private service:NgoService,private router:Router) { }

  ngOnInit() 
  {
    this.god.ngouseremail=sessionStorage.getItem('useremail');
    this.god.fromuseremail=localStorage.getItem('email');
  }

  Send()
  {
    let observableResult = this.service.SendMessage(this.god);
    observableResult.subscribe((result)=>{
      if(result == true)
      {
        alert('Message Send Successfully');
        this.router.navigate(['/ngo/ngohome']);
      }
      else
      {
        alert('OOPS ! Message Sending Failed');
        this.router.navigate(['/ngo/ngohome']);
      }

    })
  }

}
