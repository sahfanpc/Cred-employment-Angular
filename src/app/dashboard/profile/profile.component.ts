import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SarvicesService } from 'src/app/sarvices.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userdata:any;
  constructor(private router:Router,private db:SarvicesService){}

  ngOnInit(){
    this.values();
  }
values(){
 this.userdata = this.db.currentuser;
}
}
