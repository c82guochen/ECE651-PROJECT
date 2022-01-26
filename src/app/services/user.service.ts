import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = 'guochen'
  constructor(private http: HttpClient) { }

  getUser() {
    return 'guochen'
  }

  login(email, password) {
    this.user = 'guochen'
    return true
  }

  logout() {
    this.user = ''
    return true
  }

  signUp() {
    return true
  }
}
