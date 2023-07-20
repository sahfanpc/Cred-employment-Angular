import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SarvicesService {
regsteredUsers:Array<any>=[
{name:"sahfan",email:"163sahfan@gmail.com",date:"2001-07-22",number:9633066265,sex:"male",password:"Sahfan"},
{name:"safvan",email:"safvan@gmail.com",date:"2002-07-27",number:9631236265,sex:"male",password:"Sahfan"},
{name:"shahid",email:"sahid@gmail.com",date:"2003-07-29",number:9634566265,sex:"male",password:"Sahfan"},
{name:"ayisha",email:"ayisha123@gmail.com",date:"2001-03-24",number:5673066265,sex:"female",password:"Sahfan"},
{name:"binsiya",email:"345binsiya@gmail.com",date:"2001-07-25",number:7893066265,sex:"female",password:"Sahfan"},
{name:"gogul",email:"34an@gmail.com",date:"2003-07-22",number:9633068995,sex:"male",password:"Sahfan"},
{name:"shaz",email:"sah34@gmail.com",date:"2003-8-02",number:9633066265,sex:"male",password:"Sahfan"},
{name:"muzammil",email:"anam@gmail.com",date:"2002-07-02",number:9635666265,sex:"male",password:"Sahfan"},
{name:"salman",email:"salman@gmail.com",date:"2002-07-12",number:9632466265,sex:"male",password:"Sahfan"},
{name:"amana",email:"sa@gmail.com",date:"2001-07-03",number:9633066265,sex:"female",password:"Sahfan"}
];
Employees:Array<any>=[
  {fname:"sahfan",lname:"pc",age:22,date:"",number:9633066265,email:"163sahfan@gmail.com",country:"india",state:"kerala",city:"malappuram",role:"angular",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"male"},
  {fname:"safvan",lname:"p",age:20,date:"",number:9623466265,email:"sahfan@gmail.com",country:"india",state:"sdsafg",city:"malappuram",role:".net",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"male"},
  {fname:"aneesha",lname:"k",age:25,date:"",number:4653066265,email:"1anesahfan@gmail.com",country:"america",state:"dffd",city:"malappuram",role:"angular",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"female"},
  {fname:"suhail",lname:"r",age:29,date:"",number:5432066265,email:"1suhahfan@gmail.com",country:"india",state:"kerala",city:"malappuram",role:"ui/ux",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"male"},
  {fname:"amana",lname:"s",age:30,date:"",number:9578966265,email:"1fayifan@gmail.com",country:"italy",state:"dfgdf",city:"malappuram",role:"angular",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"female"},
  {fname:"hari",lname:"f",age:45,date:"",number:1468066265,email:"harisahfan@gmail.com",country:"india",state:"kerala",city:"malappuram",role:"seo",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"male"},
  {fname:"zaman",lname:"qa",age:25,date:"",number:54633066265,email:"163sahfan@gmail.com",country:"germani",state:"delhi",city:"malappuram",role:".net",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"male"},
  {fname:"fayis",lname:"fr",age:22,date:"",number:9579066265,email:"163sahfan@gmail.com",country:"india",state:"kerala",city:"malappuram",role:"react",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"male"},
  {fname:"sahfan",lname:"g",age:21,date:"",number:9633066356,email:"3fan@gmail.com",country:"china",state:"uthar",city:"malappuram",role:".net",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"male"},
  {fname:"anoop",lname:"ku",age:32,date:"",number:96330663422,email:"anoophfan@gmail.com",country:"india",state:"kerala",city:"malappuram",role:"html",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"male"},
  {fname:"binsiya",lname:"kc",age:34,date:"",number:9633063355,email:"1345sahfan@gmail.com",country:"india",state:"karnadaka",city:"malappuram",role:"angular",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"female"},
  {fname:"ayisha",lname:"c",age:19,date:"",number:1233066265,email:"anyiahfan@gmail.com",country:"pakisthan",state:"kerala",city:"malappuram",role:"html",pin:673641,address1:"chalakkandiyil house kizhisseri",address2:"kuzhimanna po",sex:"female"}


];
correntlyUsers:any;
// currentEmployees:any;
Regisercheck:any;
Logincheck:any;
currentuser:any;
// currentEmploye:any;
  constructor() { }

  RegUser(data:any){
    localStorage.setItem('user1',JSON.stringify(this.regsteredUsers));
    
    console.log(data);
    if(this.regsteredUsers.length == 0){
    this.regsteredUsers.push(data);
    this.Regisercheck=true;
    }else{
      const checkemail=this.regsteredUsers.filter((e:any)=>e.email == data.email)
      if(checkemail.length == 0){
        this.regsteredUsers.push(data);
        localStorage.setItem('user1',JSON.stringify(this.regsteredUsers));
        this.Regisercheck=true;
      }else{
        this.Regisercheck=false;
      }
    }
    
    return this.Regisercheck;
    
  }
      
  logUser(data:any){
    // localStorage.setItem('user1',JSON.stringify(this.regsteredUsers));
    const registereduser:any=localStorage.getItem('user1');
this.correntlyUsers=JSON.parse(registereduser);
console.log(this.correntlyUsers,"fortest");

if(this.correntlyUsers){
  const loginemail=this.correntlyUsers.filter((e:any)=> e.email == data.email);
  if(loginemail.length != 0){
    const loginpassword = this.correntlyUsers.filter((e:any)=>e.password == data.password);
    this.currentuser=loginpassword[0];
    console.log(this.currentuser,"g")
    if(loginpassword.length != 0){
      this.Logincheck=true;
    }else{
      this.Logincheck=false;
      alert("password not valid")
    }
  }else{
    this.Logincheck=false;
    alert("email not valid")
  }
}else{
  this.Logincheck=false;
}
return this.Logincheck;
  }
Employedata(data:any){
this.Employees.push(data);
// console.log(this.Employees,"service");

localStorage.setItem('employe',JSON.stringify(this.Employees))
}
 Getitem(){
  localStorage.setItem('employe',JSON.stringify(this.Employees))
const data:any = localStorage.getItem('employe');
// this.currentEmployees = JSON.parse(data);
return JSON.parse(data);
 }
 currentEmployecheck(){
  const data:any = localStorage.getItem('employe');
return JSON.parse(data);
 }
//  currentData(value:any){
// this.currentEmploye = value;
// // console.log(this.currentEmploye,"emp");

//  }
}
