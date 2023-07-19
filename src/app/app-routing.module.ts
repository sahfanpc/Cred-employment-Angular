import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'',loadChildren:()=>import('./user-module/user-module.module').then(mod=>mod.UserModuleModule)},
  {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
