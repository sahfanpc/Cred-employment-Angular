import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  {path:'',component:HomepageComponent,children: [
    {path:'',component:MainDashboardComponent},
    {path:'add-employee',component:AddEmployeesComponent},
    {path:'customer',component:CustomerDataComponent},
    {path:'employees-list',component:EmployeesListComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
