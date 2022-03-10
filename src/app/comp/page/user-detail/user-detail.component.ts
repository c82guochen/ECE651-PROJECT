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
  isChanging = false;
  cardID = '';
  address = '';
  province = '';
  telephone = '';
  isAddressSucc = true;
  isCardIDSucc = true;
  err_msg1 = '';
  err_msg2 = '';


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
    user => {
      this.userInfo = user;
    });
    this.name = (this.userInfo as any).username;
    this.JudgeIfNull();
    console.log(this.userInfo);
   }

  JudgeIfNull(){
    if((this.userInfo as any).credit_card != null && (this.userInfo as any).credit_card != ""){
      this.ifcardNull = false;
    }
    else
      this.ifcardNull = true;
    if((this.userInfo as any).shipping_address != null)
      this.ifaddressNull = false;
    else
      this.ifaddressNull = true;
  }


   Change():void{
      this.isChanging = true;
   }

  onChangeAddressSuccess(data: any) {
    this.isAddressSucc = true;
    console.log(this.isAddressSucc,"addSucc");
  }

  onChangeAddressError(err: ErrorEvent) {
    this.isAddressSucc = false;
    this.err_msg1 = JSON.stringify(err.error);
    console.log(this.isAddressSucc,"addFail");
  }

  onChangeCardIDSuccess(data: any) {
    this.isCardIDSucc = true;
    console.log(this.isCardIDSucc,"idSucc");
  }

  onChangeCardIDError(err: ErrorEvent) {
    this.isCardIDSucc = false;
    this.err_msg2 = JSON.stringify(err.error);
    console.log(this.isCardIDSucc,"idFail");
  }

  complete(){
    if(this.isAddressSucc || this.isCardIDSucc){
      this.userService.getUser().subscribe(
        user => {
          this.userInfo = user;
          console.log((this.userInfo as any).credit_card);
          this.JudgeIfNull();
          this.isChanging = false;
        });
    }
  }

   Submit(){
    //如果什么也不输入，则维持原样
    if(this.cardID!=""){
        this.userService.ChangeCardID(this.userInfo,this.cardID).subscribe({
        next: this.onChangeCardIDSuccess.bind(this),
        error: this.onChangeCardIDError.bind(this),
      });
    }
    if(this.address!="" && this.telephone!="" && this.province!=""){
      this.userService.ChangeAddress(this.userInfo,this.telephone,this.address,this.province).subscribe({
        next: this.onChangeAddressSuccess.bind(this),
        error: this.onChangeAddressError.bind(this),
      });
    }
    this.userService.getUser().subscribe(
        user => {
          this.userInfo = user;
          console.log((this.userInfo as any).credit_card);
          this.JudgeIfNull();
          this.isChanging = false;
        });
   }
}
