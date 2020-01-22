import { Component, OnInit } from '@angular/core';
import { PoliceService } from 'src/app/police.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  map:any
  
  constructor(private service:PoliceService,private router:Router) { }

  ngOnInit() 
  {
     let observableResult=this.service.GetAllCases();
     observableResult.subscribe((result)=>{
       console.log(result);
        this.map= result; 
      })
    
  }
  CloseCase(appNo)
  {
     let observableResult=this.service.CloseCase(appNo);
    observableResult.subscribe((result)=>{
      console.log(result);
      if(result==true){
        alert('case closed')
        this.router.navigate(['/policehome/police'])
      }else{
        alert('case closing operation failed')
        this.router.navigate(['/policehome/police'])
        
      }
       this.map= result; 
     })
    
  }

}
