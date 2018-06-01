import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginSignupResponse } from '../response/login-signup-response';
import { LoginSignupService } from '../login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  userdata = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginSignupService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userdata.email = this.form.value.email;
    this.userdata.password = this.form.value.password;

    this.loginService.loginUser(this.userdata)
      .subscribe((data: LoginSignupResponse) => {
        console.log(data);
      });
  }

}
