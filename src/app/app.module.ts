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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
