import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  userData = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  };

  constructor() {  }

  ngOnInit() {
  }

  onSubmit() {
    this.userData.firstname = this.form.value.firstname;
    this.userData.lastname = this.form.value.lastname;
    this.userData.email = this.form.value.email;
    this.userData.username = this.form.value.username;
    this.userData.password = this.form.value.password;
    console.log(this.userData);
  }

}
