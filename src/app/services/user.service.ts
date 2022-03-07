import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { authUrl } from 'src/app/config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  catchError,
  map,
  Observable,
  throwError,
  tap,
  of,
  Subject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ifLogin = false;
  local_user: any;
  userSubject = new Subject();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  setIfLogin(v: boolean) {
    this.ifLogin = v;
  }

  getIfLogin() {
    return this.ifLogin;
  }

  setUser(user: any) {
    this.local_user = user;
    console.log(this.local_user);
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject;
  }
  error_msg = '';

  signup(name: string, mail: string, pin: string) {
    console.log(name, mail, pin);
    return this.http.post(
      authUrl + '/signup/',
      {
        username: name,
        email: mail,
        password: pin
      },
      this.httpOptions
    );
  }

  login(email: string, password: string) {
    return this.http.post(
      authUrl + '/signin/',
      {
        username: email,
        password: password
      },
      this.httpOptions
    );
  }

  passChange(oldPass: string, newPass: string) {}

  logout() {
    this.ifLogin = false;
    this.local_user = new User();
    return true;
  }
}
