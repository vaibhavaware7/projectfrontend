import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  baseUrl="http://localhost:8080/hatportal/police/";
  constructor(private http:HttpClient) 
  { }

  FileComplaint(god)
  {
    debugger;;
    return this.http.post(this.baseUrl+"filecomplaint",god);
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
    var usrId= localStorage.getItem('uid');
    return this.http.post(this.baseUrl+"updateuser/"+usrId,god);
  }
}
