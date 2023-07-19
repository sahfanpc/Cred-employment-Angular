import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SarvicesService } from 'src/app/sarvices.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent {
constructor(private router:Router,private db:SarvicesService){}
users:any;
ngOnInit():void{
  this.Customers()
}

Customers(){
 this.users = this.db.correntlyUsers;
 console.log(this.users);
 
}
}
