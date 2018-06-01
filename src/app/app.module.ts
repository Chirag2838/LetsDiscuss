import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { LoginComponent } from './forms/login/login.component';
import { SignupComponent } from './forms/signup/signup.component';
import { LoginSignupService } from './forms/login-signup.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetStartedComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginSignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
