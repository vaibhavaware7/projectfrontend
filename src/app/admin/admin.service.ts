import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl="http://localhost:8080/hatportal/";
  constructor(private http:HttpClient) { }

  GetAllUsers()
  {
    return this.http.get(this.baseUrl+"admin/users");
  }
  GetAllCases()
  {
    return this.http.get(this.baseUrl+"admin/cases")
  }
  Remove(appNo)
  {
    return this.http.get(this.baseUrl+"admin/remove/"+appNo)
  }
}
