import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admininbox',
  templateUrl: './admininbox.component.html',
  styleUrls: ['./admininbox.component.css']
})
export class AdmininboxComponent implements OnInit {

  msglist:any;
  constructor(private service :AdminService) { }

  ngOnInit() 
  {
    let uid= localStorage.getItem('uid');
  let observableResult=   this.service.GetAdminMessages(uid);
    observableResult.subscribe((result)=>{
      this.msglist=result;
    })
}

}
