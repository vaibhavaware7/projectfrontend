import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  baseUrl="http://localhost:8080/hatportal/police/";
  constructor(private http:HttpClient) 
  { }

  FileComplaint(god,image)
  {
    debugger;
    const formData = new FormData();
    formData.append("god",JSON.stringify(god));
    formData.append("image",image);
    return this.http.post(this.baseUrl+"filecomplaint",formData);
  }

  GetAllCases()
  {
    return this.http.get(this.baseUrl+"allcases");
  }
  GetCaseByName(name)
  {
    return this.http.get(this.baseUrl+"cases/"+name);
  }
  GetMessages()
  {
    var usrId= localStorage.getItem('uid');
    return this.http.get(this.baseUrl+"msgs/"+usrId);
  }
  CloseCase(appNo)
  {
    return this.http.get(this.baseUrl+"close/"+appNo)
  }
  UpdateProfile(god)
  {
    debugger;
    return this.http.post(this.baseUrl+"updateuser",god);
  }
}
