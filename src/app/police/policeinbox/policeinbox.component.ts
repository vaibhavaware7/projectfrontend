import { Component, OnInit } from '@angular/core';
import { PoliceService } from 'src/app/police.service';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policeinbox',
  templateUrl: './policeinbox.component.html',
  styleUrls: ['./policeinbox.component.css']
})
export class PoliceinboxComponent implements OnInit {

  msglist:any;
  constructor(private service:PoliceService , private router:Router) { }

  ngOnInit()
  {
    let observableResult =this.service.GetMessages();
    observableResult.subscribe((result)=>{
      console.log(result);
      if(isNull(result))
      {
        alert('No messages yet !!1')
        this.router.navigate(['/police/policehome'])
      }else{
        this.msglist=result;
      }
    })
  }

}
