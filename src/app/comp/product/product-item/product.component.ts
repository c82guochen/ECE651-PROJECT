import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { MessageService } from '../../../services/message.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productItem!: Product;

  constructor(private msg: MessageService, private cartService: CartService) {}

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      console.log('added to cart', this.productItem);
    });
  }
}
