import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {MessageService} from "../../services/message.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productItem!: Product;
  @Input() addedToWishlist!: boolean;

  constructor(private msg: MessageService, private cartService: CartService) { }

  ngOnInit(): void {

  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      console.log("added to cart", this.productItem)
      this.msg.sendMsg(this.productItem);
    })
  }



}
