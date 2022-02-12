import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CartService } from '../../services/cart.service';
import { productsUrl } from '../../config/api';
import { Product } from '../../model/product';
import { CartItem } from '../../model/cart';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal = 0;

  constructor(private msg: MessageService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems('guochen');
    this.subToMessage();
  }

  subToMessage() {
    this.msg.getMsg().subscribe(() => {
      // a product is passed in, but this is handled by load cartItems
      this.loadCartItems('guochen');
    });
  }

  loadCartItems(name: string) {
    this.cartService.getCartItems(name).subscribe((items: any) => {
      this.cartItems = items;
      console.log('loadCartItems', items);
      //this.cartTotal = this.cartItems.reduce((sum, cv) => sum + cv.qty * cv.price, 0)
    });
  }
}
