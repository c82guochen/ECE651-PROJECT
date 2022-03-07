import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signUp(): void {
    this.userService.signup(this.name, this.email, this.password).subscribe(
      (data) => {
        //提示注册成功，并且跳转至login页面
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        //         this.router.navigate(['../login']);
      },
      (err) => {
        this.isSignUpFailed = true;
        this.isSuccessful = false;
        this.errorMessage = err.message;
        console.log(this.errorMessage);
      }
    );
  }
}
