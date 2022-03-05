import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  isSuccessful = false;
  isLoginFailed = false;
  localUser :any;

  constructor(private userService: UserService,private router: Router) {}

  signIn() {
    this.userService.login(this.email, this.password).subscribe(
      data => {
       //提示注册成功，并且跳转至shop页面,更新navigation
        this.isSuccessful = true;
        this.isLoginFailed = false;
        this.userService.setUser(data);
        this.userService.setIfLogin(this.isSuccessful);
        this.router.navigate(['']);
      },
      err => {
        this.isSuccessful = false;
        this.isLoginFailed = true;
        this.userService.setIfLogin(this.isSuccessful);
      }
    );
    //if the outcome is true,ifLogin in nav.ts will be assigned to true
  }
  ngOnInit(): void {}
}
