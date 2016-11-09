import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ LoginService ]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    if (!this.loginService.isLogin()) { this.router.navigate(['/login']); };
  }

}
