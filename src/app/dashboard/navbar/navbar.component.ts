import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SarvicesService } from 'src/app/sarvices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
userdata:any;
  constructor(private router:Router,private db:SarvicesService){}

  ngOnInit(){
    this.values();
  }
values(){
 this.userdata = this.db.currentuser;
}

}
