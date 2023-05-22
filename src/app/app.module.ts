import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ExitToApp } from '@material-ui/icons';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { Dasheboard2Component } from './components/dasheboard2/dasheboard2.component';
import { MychartComponent } from './mychart/mychart.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/authentification/logout/logout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddPatientComponent } from './components/Patient/add-patient/add-patient.component';
import { ViewPatientComponent } from './components/Patient/view-patient/view-patient.component';
import { EditPatientComponent } from './components/Patient/edit-patient/edit-patient.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewSymptomeComponent } from './components/symptome/view-symptome/view-symptome.component';
import { AddSymptomeComponent } from './components/symptome/add-symptome/add-symptome.component';
import { EditSymptomeComponent } from './components/symptome/edit-symptome/edit-symptome.component';
import { ViewTestComponent } from './components/test/view-test/view-test.component';
import { AddTestComponent } from './components/test/add-test/add-test.component';
import { EditTestComponent } from './components/test/edit-test/edit-test.component';
import { ViewTraitementComponent } from './components/traitement/view-traitement/view-traitement.component';
import { ViewDiagnosticComponent } from './components/diagnostic/view-diagnostic/view-diagnostic.component';
import { AddDiagnosticComponent } from './components/diagnostic/add-diagnostic/add-diagnostic.component';
import { EditDiagnosticComponent } from './components/diagnostic/edit-diagnostic/edit-diagnostic.component';
import { AddTraitementComponent } from './components/traitement/add-traitement/add-traitement.component';
import { EditTraitementComponent } from './components/traitement/edit-traitement/edit-traitement.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    Dasheboard2Component,
    MychartComponent,
    LogoutComponent,
    NavBarComponent,
    AddPatientComponent,
    ViewPatientComponent,
    EditPatientComponent,
    ViewSymptomeComponent,
    AddSymptomeComponent,
    EditSymptomeComponent,
    ViewTestComponent,
    AddTestComponent,
    EditTestComponent,
    ViewTraitementComponent,
    ViewDiagnosticComponent,
    AddDiagnosticComponent,
    EditDiagnosticComponent,
    AddTraitementComponent,
    EditTraitementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
