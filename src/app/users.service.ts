import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  addUserInformation(body:any){

    return this.http.post("http://localhost:3000/users",body);
  
  
  }
  
  }

