import { Dasheboard2Component } from './components/dasheboard2/dasheboard2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { MychartComponent } from './mychart/mychart.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { LogoutComponent } from './components/authentification/logout/logout.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'dasheboard'},
  {path:'dasheboard',component:DashboardComponent , canActivate:[AuthGuard]},
  {path:'dash2',component:Dasheboard2Component , canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'chart',component:MychartComponent ,canActivate:[AuthGuard]},
  {path:'logout',component:LogoutComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
