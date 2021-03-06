import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoginService ]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    if (!this.loginService.isLogin()) { this.router.navigate(['/login']); };
  }

}
