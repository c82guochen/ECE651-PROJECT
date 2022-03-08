import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../model/cart';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-shopping-cart-detail',
  templateUrl: './shopping-cart-detail.component.html',
  styleUrls: ['./shopping-cart-detail.component.css']
})
export class ShoppingCartDetailComponent implements OnInit {
  cartItem!: CartItem;
  constructor(private cServ: CartService) {}
  user: User | null = null;
  kart: any[] = [];

  ngOnInit(): void {
    console.log('shoppingcart Detail');
    this.cServ.getCartItems().subscribe((it) => {
      this.kart = it;
      console.log(it);
    });
  }
}
