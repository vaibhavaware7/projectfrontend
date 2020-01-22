import { Component, OnInit } from '@angular/core';
import { PoliceService } from 'src/app/police.service';

@Component({
  selector: 'app-policeinbox',
  templateUrl: './policeinbox.component.html',
  styleUrls: ['./policeinbox.component.css']
})
export class PoliceinboxComponent implements OnInit {

  msglist:any;
  constructor(private service:PoliceService) { }

  ngOnInit()
  {
    let observableResult =this.service.GetMessages();
    observableResult.subscribe((result)=>{
      console.log(result);
      this.msglist=result;
    })
  }

}
