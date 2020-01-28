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

  Register(god,image)
  {
    const formData = new FormData();
    formData.append("god",JSON.stringify(god));
    formData.append("image",image);
   
    return this.http.post(this.baseUrl+"users/register",formData);
  }

  GetAllPhotos()
  {
    return this.http.get(this.baseUrl+"users/imgs");
  }
  GetDatapoints()
  {
    return this.http.get(this.baseUrl+"users/stat");
  }
}
