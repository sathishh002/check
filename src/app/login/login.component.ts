import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Confirmvalidator } from '../confirm.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[ `input.ng-valid{border:2px solid green;}
  input.ng-invalid{border:2px solid red;}`]
})
export class LoginComponent{
  loginForm=new FormGroup({
  username:new FormControl(""),
  password:new FormControl(""),
  cpassword:new FormControl("")
    });

    constructor(private fb:FormBuilder){

    }

    loginform1=this.fb.group({
      username:["",[Validators.required,Validators.minLength(3)]],
      password:[,[Validators.required]],
      cpassword:[,[Validators.required]]
    },{validator:Confirmvalidator('password','cpassword')})
  }


