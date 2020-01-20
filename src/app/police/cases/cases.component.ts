import { Component, OnInit } from '@angular/core';
import { PoliceService } from 'src/app/police.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  map:any
  
  constructor(private service:PoliceService) { }

  ngOnInit() 
  {
     let observableResult=this.service.GetAllCases();
     observableResult.subscribe((result)=>{
       console.log(result);
        this.map= result; 
      })
    
  }

}
