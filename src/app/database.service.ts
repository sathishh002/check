import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private client:HttpClient) { }
  getproducts(){
    return this.client.get("http://localhost:3000/products");
  }
}
