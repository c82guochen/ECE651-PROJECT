import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CartItem } from '../model/cart';
import { cartUrl } from '../config/api';
import { Product } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  localCart?: any;
  index = 5;
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  getCartItems(name: string): Observable<any> {
    return this.http.get<any>(cartUrl).pipe(
      map((cartItems) => {
        this.localCart = cartItems;
        let current = cartItems[name]['items'] as CartItem[];
        console.log(current);
        current.forEach(
          (i) =>
            (i.product =
              this.productService.local_products.get(i.id) ||
              new Product(0, ''))
        );
        return current;
      })
    );
  }

  //add
  addProductToCart(product: Product): Observable<any> {
    this.index += 1;
    return this.http.post(cartUrl, product);
  }
}
