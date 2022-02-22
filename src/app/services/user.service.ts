import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { map, Observable } from 'rxjs';
import { authUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = 'guochen';

  constructor(private http: HttpClient) {}

  getUser() {
    return 'guochen';
  }

  signup(username: string, email: string, password: string) {}

  passChange(oldPass: string, newPass: string) {}

  login(email: string, password: string) {
    return this.http.post(authUrl + '/signin', {
      username: email,
      password: password
    });
  }

  logout() {
    this.user = '';
    return true;
  }
}
