import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getproducts(){
    return ("http://localhost:3000/products")
  }
}
