import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productList:any="";
  constructor(private service:DatabaseService){}

  ngOnInit(){
    this.service.getproducts().subscribe(data=>{
      this.productList=data;
    }
    )
  }
}
