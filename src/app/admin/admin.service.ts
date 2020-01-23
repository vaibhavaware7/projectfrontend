import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl="http://localhost:8080/hatportal/admin/";
  constructor(private http:HttpClient) { }

  GetAllUsers()
  {
    return this.http.get(this.baseUrl+"users");
  }
  GetAllCases()
  {
    return this.http.get(this.baseUrl+"cases")
  }
  Remove(appNo)
  {
    return this.http.get(this.baseUrl+"remove/"+appNo)
  }
  AddUser(god)
  {
    return this.http.post(this.baseUrl+"add",god);
  }
  GetVictim(name)
  {
    return this.http.get(this.baseUrl+"getvic/"+name);
  }
  GetAdminMessages(uid)
  {
    return this.http.get(this.baseUrl+"msgs/"+uid);
  }
  RemoveUser(uid)
  {
    debugger;
    return this.http.delete(this.baseUrl+"delete/"+uid);
  }
  AddDept(god)
  {
    return this.http.post(this.baseUrl+"addept",god);
  }
  GetAllRequests()
  {
    return this.http.get(this.baseUrl+"requests");
  }
  Verify(uid)
  {
    return this.http.get(this.baseUrl+"verify/"+uid);
  }
  GetUser(name)
  {
    return this.http.get(this.baseUrl+"user/"+name);
  }
}
