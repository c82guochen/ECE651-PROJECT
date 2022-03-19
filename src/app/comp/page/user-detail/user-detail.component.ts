import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';
import { catchError, map, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userInfo!: any;
  name!: string;
  emptyString = 'Empty temporarily,please fill before placing order.';
  ifcardNull = true;
  ifaddressNull = true;
  iftelephoneNull = true;
  isChanging = false;
  cardID = '';
  address = '';
  province = '';
  telephone = '';
  postal_code = '';
  err_msg = '';
  isUpdateSucc = true;
  isaddressFill = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.userInfo = user;
    });
    this.name = (this.userInfo as any).username;
    this.userService.setUserToken((this.userInfo as any).token);
    this.JudgeIfNull();
    console.log(this.userInfo);
  }

  JudgeIfNull() {
    if (
      (this.userInfo as any).credit_card != null &&
      (this.userInfo as any).credit_card != ''
    ) {
      this.ifcardNull = false;
    } else this.ifcardNull = true;
    if ((this.userInfo as any).shipping_address != null)
      this.ifaddressNull = false;
    else this.ifaddressNull = true;
    if ((this.userInfo as any).shipping_address.phone_number != null)
      this.iftelephoneNull = false;
    else this.iftelephoneNull = true;
  }

  Change(): void {
    this.isChanging = true;
  }

  onUpdateUserSuccess(data: any) {
    this.isUpdateSucc = true;
    this.isChanging = false;
    console.log(data);
    data.token = this.userService.getUserToken();
    //     setUser
    this.userService.setUser(data);
    this.userInfo = data;
  }

  onUpdateUserError(err: ErrorEvent) {
    this.isUpdateSucc = false;
    this.err_msg = JSON.stringify(err.error);
    window.alert(this.err_msg);
    console.log(this.err_msg);
  }

  Submit() {
    if (
      this.cardID != '' &&
      this.address != '' &&
      this.telephone != '' &&
      this.province != '' &&
      this.postal_code != ''
    ) {
      if (this.userService.getUserToken() != null) {
        let userToken = this.userService.getUserToken();
        this.userService
          .UpdateUser(
            this.userInfo,
            this.cardID,
            this.telephone,
            this.address,
            this.province,
            this.postal_code,
            userToken
          )
          .subscribe({
            next: this.onUpdateUserSuccess.bind(this),
            error: this.onUpdateUserError.bind(this)
          });
      }
    }

    else {
      this.isUpdateSucc = false;
      this.err_msg = '(information is incomplete)';
      window.alert('Fail to submit,please try again!' + `${this.err_msg}`);
      this.isChanging = true;
    }

  
  }
}
