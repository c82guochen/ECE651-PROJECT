import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userInfo!: User;
  name!: string;
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.login('a@a.com', '12345678').subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }
}
