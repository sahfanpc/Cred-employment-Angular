import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SarvicesService } from 'src/app/sarvices.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  constructor(private router:Router,private db:SarvicesService,private fb:FormBuilder){}
loginform=this.fb.group({
  email:['',Validators.required],
  password:['',Validators.required]
})
  ngOnInit(){}

  Submit(data:any){
const check = this.db.logUser(data);
if(check == true){
  alert("login seccess")
  this.router.navigateByUrl('dashboard')
}else{
  alert("not valid");
  // this.router.navigateByUrl('')
}
  }
}
