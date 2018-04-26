import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetStartedComponent} from './get-started/get-started.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: GetStartedComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
