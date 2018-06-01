import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginSignupService} from '../login-signup.service';
import {LoginSignupResponse} from '../response/login-signup-response';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  userdata = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  };

  constructor(private signupService: LoginSignupService) {  }

  ngOnInit() {
  }

  onSubmit() {
    this.userdata.firstname = this.form.value.firstname;
    this.userdata.lastname = this.form.value.lastname;
    this.userdata.email = this.form.value.email;
    this.userdata.username = this.form.value.username;
    this.userdata.password = this.form.value.password;

    this.signupService.registerUser(this.userdata)
      .subscribe((data: LoginSignupResponse) => {
        console.log(data);
      });

  }

}
