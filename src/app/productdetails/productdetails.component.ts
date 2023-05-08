import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {

  productList:any="";
  searchFor:any="";
  finalProduct:any="";

  constructor(private service:DatabaseService,private route:ActivatedRoute){}
  ngOnInit(){
    this.service.getproducts().subscribe(data=>{
      this.productList=data;
      this.route.params.subscribe(paramdata=>{
        this.searchFor=paramdata['check'];

        for(let product of this.productList){
          if(product.model==this.searchFor){
            this.finalProduct=product;
            break;
          }
        }
      })
     } )

    }
  }

