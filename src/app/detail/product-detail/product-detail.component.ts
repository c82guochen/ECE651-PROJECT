import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productItem!: Product;

  constructor(private cartService: CartService,
  private routeInfo: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
//    this.productItem = this.routeInfo.snapshot.queryParams['product'];
      const productId = this.routeInfo.snapshot.paramMap.get('id');
      console.log(productId);
      this.productItem = this.productService.getProduct(Number(productId));
      console.log(this.productItem);
//       this.productItem = res['data'].productItem;
//       console.log(this.productItem);
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      console.log("added to cart", this.productItem)
    })
  }
}
