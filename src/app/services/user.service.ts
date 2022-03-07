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
  Subject,
  Observer,
  BehaviorSubject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ifLogin = false;
  userSubject = new BehaviorSubject<User | null>(null);
  local_user: User | null = null;
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

  setUser(user: User) {
    this.local_user = user;
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject;
  }
  error_msg = '';

  signup(name: string, mail: string, pin: string): Observable<User> {
    console.log(name, mail, pin);
    return this.http.post<User>(
      authUrl + '/signup/',
      {
        username: name,
        email: mail,
        password: pin
      },
      this.httpOptions
    );
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(
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
    this.userSubject.next(null);
    return true;
  }
}
