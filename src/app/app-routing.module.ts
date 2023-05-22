import { Dasheboard2Component } from './components/dasheboard2/dasheboard2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { MychartComponent } from './mychart/mychart.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { LogoutComponent } from './components/authentification/logout/logout.component';
import { ViewPatientComponent } from './components/Patient/view-patient/view-patient.component';
import { AddPatientComponent } from './components/Patient/add-patient/add-patient.component';
import { EditPatientComponent } from './components/Patient/edit-patient/edit-patient.component';
import { ViewTestComponent } from './components/test/view-test/view-test.component';
import { AddTestComponent } from './components/test/add-test/add-test.component';
import { EditTestComponent } from './components/test/edit-test/edit-test.component';
import { ViewTraitementComponent } from './components/traitement/view-traitement/view-traitement.component';
import { AddTraitementComponent } from './components/traitement/add-traitement/add-traitement.component';
import { EditTraitementComponent } from './components/traitement/edit-traitement/edit-traitement.component';
import { ViewSymptomeComponent } from './components/symptome/view-symptome/view-symptome.component';
import { AddSymptomeComponent } from './components/symptome/add-symptome/add-symptome.component';
import { EditSymptomeComponent } from './components/symptome/edit-symptome/edit-symptome.component';
import { ViewDiagnosticComponent } from './components/diagnostic/view-diagnostic/view-diagnostic.component';
import { AddDiagnosticComponent } from './components/diagnostic/add-diagnostic/add-diagnostic.component';
import { EditDiagnosticComponent } from './components/diagnostic/edit-diagnostic/edit-diagnostic.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'dasheboard'},
  {path:'dasheboard',component:DashboardComponent , canActivate:[AuthGuard]},
  {path:'dash2',component:Dasheboard2Component , canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'chart',component:MychartComponent ,canActivate:[AuthGuard]},
  {path:'logout',component:LogoutComponent ,canActivate:[AuthGuard]},
  {path:'view-patient',component:ViewPatientComponent ,canActivate:[AuthGuard]},
  {path:'add-patient',component:AddPatientComponent ,canActivate:[AuthGuard]},
  { path:'edit-patient/:id',component:EditPatientComponent, canActivate:[AuthGuard]},


  {path:'view-test',component:ViewTestComponent ,canActivate:[AuthGuard]},
  {path:'add-test',component:AddTestComponent ,canActivate:[AuthGuard]},
  { path:'edit-test/:id',component:EditTestComponent, canActivate:[AuthGuard]},


  {path:'view-traitement',component:ViewTraitementComponent ,canActivate:[AuthGuard]},
  {path:'add-traitement',component:AddTraitementComponent ,canActivate:[AuthGuard]},
  { path:'edit-traitement/:id',component:EditTraitementComponent, canActivate:[AuthGuard]},


  {path:'view-symptome',component:ViewSymptomeComponent ,canActivate:[AuthGuard]},
  {path:'add-symptome',component:AddSymptomeComponent ,canActivate:[AuthGuard]},
  { path:'edit-symptome/:id',component:EditSymptomeComponent, canActivate:[AuthGuard]},


  {path:'view-diagnostic',component:ViewDiagnosticComponent ,canActivate:[AuthGuard]},
  {path:'add-diagnostic',component:AddDiagnosticComponent ,canActivate:[AuthGuard]},
  { path:'edit-diagnostic/:id',component:EditDiagnosticComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
