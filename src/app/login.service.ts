import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';


export class User {
  id: number;
  name: string;
  password: string;
  inscription: string;
  static fromJson(obj: Object): User {
    let newUser = new User();
    newUser.id = parseInt(obj['id']);
    newUser.name = obj['name'];
    newUser.password = obj['password'];
    newUser.inscription = obj['inscription'];
    return newUser;
  }
}



@Injectable()
export class LoginService {
  // url_server = 'http://dev69.local/api/loginv4/server.php';
  url_server = 'https://bydev69.tk/api/ng2-login-v4/server.php';
  user: User;
  errorLogin: string;
  onUser: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(
    private router: Router,
    private http: Http
  ) { }

  isLogin() {
    return (this.user) ? true : false;
  }

  newUser(obj_user: Object) {
    this.user = User.fromJson(obj_user);
    console.log(obj_user);
    this.onUser.next(this.user);
  }

  Login(_name: string, _password: string) {
    this.authenticate(_name, _password)
                     .subscribe(
                       user => this.newUser(user),
                       error =>  this.errorLogin = <any>error);
  }

  authenticate(_name: string, _password: string): Observable<any> {
    let body = `name=${_name}&password=${_password}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      this.url_server, body, options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    // console.log(res);
    let body = res.json();
    console.log(body);
    return body;
    // return body.data || { };
  }

  private handleError (error: Response | any) {
    console.log('Error: ', error);
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
