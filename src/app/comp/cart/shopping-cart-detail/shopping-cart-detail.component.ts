import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../model/cart';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-shopping-cart-detail',
  templateUrl: './shopping-cart-detail.component.html',
  styleUrls: ['./shopping-cart-detail.component.css']
})
export class ShoppingCartDetailComponent implements OnInit {
  cartItem!: CartItem;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    //     this.cartService.getCartItems();
  }
}
