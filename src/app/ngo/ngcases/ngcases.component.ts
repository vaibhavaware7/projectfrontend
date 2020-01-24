import { Component, OnInit } from '@angular/core';
import { PoliceService } from 'src/app/police.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngcases',
  templateUrl: './ngcases.component.html',
  styleUrls: ['./ngcases.component.css']
})
export class NgcasesComponent implements OnInit {

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
