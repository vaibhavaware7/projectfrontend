import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {

  baseUrl="http://localhost:8080/hatportal/";
  constructor(private http:HttpClient) { }

  validateUser(user)
  {
    return this.http.post(this.baseUrl+"users/login",user);
  }



}
