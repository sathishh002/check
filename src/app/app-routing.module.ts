import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'product',
    component:ProductComponent,
    children:[
      {
        path:':check',
        component:ProductdetailComponent
      }
    ]
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
  path:'**',
  component:HomeComponent//wlid card search
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
