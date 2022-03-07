import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.login('', '');
  }
}
