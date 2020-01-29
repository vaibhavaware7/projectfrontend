import { Component, OnInit } from '@angular/core';

import * as CanvasJS from '../../../assets/js files/canvasjs.min';
import { CommondataService } from 'src/app/commondata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  
  data:any;
   y1 :any;
  y2:any;
  constructor(private service:CommondataService,private router:Router) { }

  ngOnInit() {
          
    let observableResult=   this.service.GetDatapoints();
    observableResult.subscribe((result)=>{
    console.log(result) 
     this.data=result;
      this.y1= this.data[0] *100;
      this.y2=this.data[1] +100;
      console.log(this.y1)
      console.log(this.y2)
      
    
    })
    
    var missingPeopleColumnChart = new CanvasJS.Chart("missing-chart",{
      animationEnabled: true,
      data:[{

        indexLabelFontColor: "#676464",
        indexLabelFontSize: 14,
        legendMarkerType: "square",
        legendText: "{indexLabel}",
        type:"pie",
        dataPoints:[   {  y: 1000, name:"Found", indexLabel: "Found ", legendText: "No Of Found People", exploded: true },
        {  y: 2000, name:"Missing", indexLabel: "Missing", legendText: "No Of Missing People" },
     ]
      },
      ]
    })
 
   
   
    window.onload = function()
      {
       missingPeopleColumnChart.render();
    }
    } 
    Home(){
      this.router.navigate(['/home'])
    }
  }


