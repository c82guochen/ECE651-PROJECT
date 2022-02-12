import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  // wishlist: number[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
    // this.loadWishlist()
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }
}
