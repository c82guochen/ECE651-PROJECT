import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service'
import {User} from '../../model/user'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userInfo!: User;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getUser()
  }

}
