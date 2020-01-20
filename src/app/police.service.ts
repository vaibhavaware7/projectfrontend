import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  baseUrl="http://localhost:8080/hatportal/police/";
  constructor(private http:HttpClient) 
  { }

  FileComplaint(victim,address)
  {
    debugger;
    const formData = new FormData();
    formData.set("vic",JSON.stringify(victim));
    formData.append("adr",JSON.stringify(address));
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
}
