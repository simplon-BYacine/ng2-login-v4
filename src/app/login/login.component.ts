import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User } from '../login.service';

import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: User;
  errorMessage: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService) {
      this.form = this.formBuilder.group({
        name: '',
        password: ''
      });
      //this.user = LoginService.user;
      this.loginService.onUser.subscribe( (u) => this.user = u);
    }

  ngOnInit() {

  }

  public Connect(_name: string, _password: string): void {
    this.loginService.Login(_name, _password);
  }
}
