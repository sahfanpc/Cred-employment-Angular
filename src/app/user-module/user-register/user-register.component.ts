import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SarvicesService } from 'src/app/sarvices.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  constructor(private router:Router,private db:SarvicesService,private fb:FormBuilder){}
  registerform=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    date:['',Validators.required],
    number:['',Validators.required],
    sex:['',Validators.required],
    password:['',Validators.required]
  })
    ngOnInit(){}
  
    Submit(value:any){
  const check=this.db.RegUser(value);
  if(check){
    alert("register seccesfully")
    this.router.navigateByUrl('')
  }else{
    alert("registretion failed")
  }
    }
}
