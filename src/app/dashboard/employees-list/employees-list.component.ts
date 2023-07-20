import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SarvicesService } from 'src/app/sarvices.service';



@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  data:any;
 
constructor (private router:Router,private db:SarvicesService){}

ngOnInit(){
  this.Getdata()
}
Getdata(){
 this.data=this.db.Getitem();
 console.log(this.data,"aneesh");
 
}

Passdata(data:number):void{
  // this.db.currentData(value)
}
}
