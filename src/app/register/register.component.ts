import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UsersService } from '../users.service';
import { Conformvalidator } from './conform.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`input.ng-invalid{border:2px solid red;}
  input.ng-valid{border:2px solid green;}`
]
})
export class RegisterComponent {
  registerform=new FormGroup({
    username:new FormControl(""),
    email:new FormControl(""),
    password:new FormControl(""),
    cpassword:new FormControl("")
      });
submitted:boolean=false;

username:any="";
emailid:any="";
emailpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
password:any="";
cpassword:any="";
constructor(private fb:FormBuilder) { }


submitForm(){
   var body={
     uname:this.username,
     email:this.emailid,
     pass:this.password,
     cpass:this.cpassword
   }
  }


registerform1=this.fb.group({
  username:["",[Validators.required,Validators.minLength(3)]],
  email:["",[Validators.required,Validators.minLength(3)]],
  password:[,[Validators.required]],
  cpassword:[,[Validators.required]]
},{validator:Conformvalidator('password','cpassword')}
)
}

