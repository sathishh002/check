import { Component} from '@angular/core';
import{HttpClient}from '@angular/common/http';

import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'secondproj';
  books=["samuel: Heaven"];
  constructor(private service:ProductService){
    console.log(this.service.getproducts());
    setInterval(()=>{
      this.books.push("New Book:"+Date.now());
    },1000);
  
}
}
