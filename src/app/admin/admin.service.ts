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
  AddUser(god)
  {
    return this.http.post(this.baseUrl+"admin/add",god);
  }
  GetVictim(name)
  {
    return this.http.get(this.baseUrl+"admin/getvic/"+name);
  }
  GetAdminMessages(uid)
  {
    return this.http.get(this.baseUrl+"admin/msgs/"+uid);
  }
  RemoveUser(uid)
  {
    debugger;
    return this.http.delete(this.baseUrl+"admin/delete/"+uid);
  }
  AddDept(god)
  {
    return this.http.post(this.baseUrl+"admin/addept",god);
  }
}
