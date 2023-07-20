import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { ProfileComponent } from './profile/profile.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    SidebarComponent,
    CustomerDataComponent,
    MainDashboardComponent,
    AddEmployeesComponent,
    EmployeesListComponent,
    ProfileComponent,
    DialogComponent,
    
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule
    // MatFormFieldAppearance
  ]
})
export class DashboardModule { }
