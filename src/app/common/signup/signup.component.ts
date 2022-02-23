import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = '';
  email ='';
  password = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signUp():void {
    console.log(this.name,this.email,this.password);
    this.userService.signup(this.name,this.email,this.password);
  }
}
