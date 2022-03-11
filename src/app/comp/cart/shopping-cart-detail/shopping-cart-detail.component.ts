import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../model/cart';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';
import { OrderItem } from 'src/app/model/order';
import { CheckoutOrder } from 'src/app/model/checkout';

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
  checkoutOrder!: CheckoutOrder;
  total_price = 0;

  

  ngOnInit(): void {
    console.log('shoppingcart Detail');
    this.cServ.getCartItems().subscribe((it) => {
      this.kart = it;
      console.log(it);
      for (let item of it){
        this.total_price += item.product.price * item.quantity;
      }
    });
  }

  delete(id: number) {
    console.log('trigger deleting product');
    this.cServ.delProduct(id).subscribe((res) => {
      console.log(res);
      this.kart = res as any[];
      this.total_price = 0;
      for (let item of res as any[]){
        this.total_price += item.product.price * item.quantity;
      }
    });
  }

  clear() {
    // TODO: send a clear cart request
  }

  placeOrder(){
    let status='unpaid';
    let order=[];
    console.log('trigger place order');
    for (let item of this.kart){
      let obj:CheckoutOrder = {
        product_id: -1,
        quantity:-1
      };
      console.log('I am item: ',item)
      console.log(item.product.id, item.quantity) 
      obj.product_id = item.product.id;  
      obj.quantity = item.quantity;
      order.push(obj);
    }
    console.log(order);
    // this.cServ
    //   .create_new_order(status,order)
    //   .subscribe((res) => {
    //     console.log('added to cart', res);
    //   });   
  }
}
