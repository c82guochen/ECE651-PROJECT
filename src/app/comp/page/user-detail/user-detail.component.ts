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
  iftelephoneNull = false;
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
    this.JudgeIfNull();
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
    this.userInfo = data;
  }

  onUpdateUserError(err: ErrorEvent) {
    this.isUpdateSucc = false;
    this.err_msg = JSON.stringify(err.error);
    console.log(this.err_msg);
  }

  Submit() {

    if (this.cardID != ''
    && this.address != ''
    && this.telephone != ''
    && this.province != ''
    && this.postal_code != '') {
      this.userService.UpdateUser(
          this.userInfo,
          this.cardID,
          this.telephone,
          this.address,
          this.province,
          this.postal_code).subscribe({
        next: this.onUpdateUserSuccess.bind(this),
        error: this.onUpdateUserError.bind(this)
      });
    }
//     else if((this.address == ''
//     || this.telephone == ''
//     || this.province == ''
//     || this.postal_code == '') && this.cardID != ''){ //卡号和地址必须有一个是输入完整的
//       this.isUpdateSucc = false;
//       console.log("2");
//       this.err_msg = "(address information is incomplete.)";
//     }
//     else if(this.cardID == ''&& this.address != ''
//     && this.telephone != ''
//     && this.province != ''
//     && this.postal_code != ''){
//       this.isUpdateSucc = false;
//       console.log("3");
//       this.err_msg = "(credit card number is empty.)";
//     }
    else{
      this.isUpdateSucc = false;
      this.err_msg = "(information is incomplete)";
      window.alert("Fail to submit,please try again!");
      this.isChanging = true;
    }

//     this.userService.getUser().subscribe((user) => {
//       this.userInfo = user;
//       console.log((this.userInfo as any).credit_card);
//       this.JudgeIfNull();
//       this.isChanging = false;
//     });
//     if (this.cardID != '') {
//       this.userService.ChangeCardID(this.userInfo, this.cardID).subscribe({
//         next: this.onChangeCardIDSuccess.bind(this),
//         error: this.onChangeCardIDError.bind(this)
//       });
//     }
//     if (this.address != '' && this.telephone != '' && this.province != '') {
//       this.userService
//         .ChangeAddress(
//           this.userInfo,
//           this.telephone,
//           this.address,
//           this.province
//         )
//         .subscribe({
//           next: this.onChangeAddressSuccess.bind(this),
//           error: this.onChangeAddressError.bind(this)
//         });
//     }
//     this.userService.getUser().subscribe((user) => {
//       this.userInfo = user;
//       console.log((this.userInfo as any).credit_card);
//       this.JudgeIfNull();
//       this.isChanging = false;
//     });
  }
}
