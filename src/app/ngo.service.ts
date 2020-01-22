import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgoService {

  baseUrl="http://localhost:8080/hatportal/";
  constructor(private http:HttpClient)
   { }

   NgoList()
   {
     return this.http.get(this.baseUrl+"ngo/list")
   }
   SendMessage(god)
   {
      return this.http.post(this.baseUrl+"ngo/send",god);
   }
}
