import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { map, Observable } from 'rxjs';
import { userUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = 'guochen';
  constructor(private http: HttpClient) {}

  getUser() {
    return 'guochen';
  }

  login(email: string, password: string) {
    this.user = 'guochen';
    return true;
  }

  logout() {
    this.user = '';
    return true;
  }

  signUp() {
    return true;
  }
}
