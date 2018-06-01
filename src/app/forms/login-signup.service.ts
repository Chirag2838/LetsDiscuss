import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LoginSignupResponse} from './response/login-signup-response';

@Injectable()
export class LoginSignupService {

  signupUrl = '/api/registration';
  loginUrl = '/api/login';

  headerOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }

  registerUser(userdata): Observable<LoginSignupResponse> {
    const body = new HttpParams()
      .set('username', userdata.username)
      .set('firstname', userdata.firstname)
      .set('lastname', userdata.lastname)
      .set('email', userdata.email)
      .set('pass1', userdata.password)
      .set('pass2', userdata.password);

    return this.http.post<LoginSignupResponse>(this.signupUrl, body.toString(),
      this.headerOptions);
  }

  loginUser(userdata): Observable<LoginSignupResponse> {
    const body = new HttpParams()
      .set('email', userdata.email)
      .set('password', userdata.password);

    return this.http.post<LoginSignupResponse>(this.loginUrl, body.toString(),
      this.headerOptions);
  }
}
