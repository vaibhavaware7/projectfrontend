import { Component, OnInit } from '@angular/core';
import { CommondataService } from 'src/app/commondata.service';
import { isNull } from 'util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photo:any;
  constructor(private service:CommondataService) { }

  ngOnInit() 
  {
    let observableResult= this.service.GetAllPhotos();
    observableResult.subscribe((result)=>{
      if(isNull(result))
      {
        alert('No Photos Found')
      }
      else{
        this.photo=result;
      }
    })
  }

}
