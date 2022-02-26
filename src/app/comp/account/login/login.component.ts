import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private userService: UserService) {}

  signIn() {
    console.log(this.email, this.password);
    this.userService.login(this.email, this.password);
    //if the outcome is true,ifLogin in nav.ts will be assigned to true
  }

  ngOnInit(): void {}
}
