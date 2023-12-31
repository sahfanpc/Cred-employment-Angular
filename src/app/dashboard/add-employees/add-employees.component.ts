import { Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SarvicesService } from 'src/app/sarvices.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent {
  // state
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  // contry
  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  constructor(private router:Router,private db:SarvicesService,private fb:FormBuilder,public dialog: MatDialog) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

      // form valid
 employeregister = this.fb.group({
  fname:['',Validators.required],
  lname:['',Validators.required],
  age:['',Validators.required],
  date:['',Validators.required],
  number:['',Validators.required],
  email:['',Validators.required],
  country:['',Validators.required],
  state:['',Validators.required],
  city:['',Validators.required],
  role:['',Validators.required],
  pin:['',Validators.required],
  address1:['',Validators.required],
  address2:['',Validators.required],
  sex:['',Validators.required]
})

Submit(value:any){
  // this.dialog.open(DialogComponent);
  if(this.employeregister.valid){
  // console.log(value);
  this.db.Employedata(value);
  this.dialog.open(DialogComponent);
  }
}
}
