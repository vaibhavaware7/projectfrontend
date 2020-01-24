import { Component, OnInit } from '@angular/core';
import { PoliceService } from 'src/app/police.service';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngoinbox',
  templateUrl: './ngoinbox.component.html',
  styleUrls: ['./ngoinbox.component.css']
})
export class NgoinboxComponent implements OnInit {

  msglist:any;
  constructor(private service:PoliceService,private router:Router) { }

  ngOnInit()
  {
    let observableResult =this.service.GetMessages();
    observableResult.subscribe((result)=>{
      console.log(result);
      if(isNull(result))
      {
        alert('No messages yet !!1')
        this.router.navigate(['/ngo/ngohome'])
      }else{
        this.msglist=result;
      }
      })
  }

}
