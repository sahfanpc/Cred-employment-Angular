import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SarvicesService {
regsteredUsers:Array<any>=[];
correntlyUsers:any;
Regisercheck:any;
Logincheck:any;
currentuser:any;
  constructor() { }

  RegUser(data:any){
    console.log(data);
    if(this.regsteredUsers.length == 0){
    this.regsteredUsers.push(data);
    this.Regisercheck=true;
    }else{
      const checkemail=this.regsteredUsers.filter((e:any)=>e.email == data.email)
      if(checkemail.length == 0){
        this.regsteredUsers.push(data);
        this.Regisercheck=true;
      }else{
        this.Regisercheck=false;
      }
    }
    localStorage.setItem('user1',JSON.stringify(this.regsteredUsers))
    return this.Regisercheck;
    
  }
      
  logUser(data:any){
    const registereduser:any=localStorage.getItem('user1');
this.correntlyUsers=JSON.parse(registereduser);
if(this.correntlyUsers){
  const loginemail=this.correntlyUsers.filter((e:any)=> e.email == data.email);
  if(loginemail.length != 0){
    const loginpassword = this.correntlyUsers.filter((e:any)=>e.password == data.password);
    this.currentuser=loginpassword[0];
    // console.log(this.currentuser,"g")
    if(loginpassword.length != 0){
      this.Logincheck=true;
    }else{
      alert("password not valid")
    }
  }else{
    alert("email not valid")
  }
}else{
  this.Logincheck=false;
}
return this.Logincheck;
  }

 
}
