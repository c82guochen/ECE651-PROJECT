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
  localCart?: any; //（不能用any，后期要改！）
  index = 5; //index是购物车现有容量
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {
    //这里我还是需要理解一下
  }

  getCartItems(name: string): Observable<any> {
    //这里需要给我讲解一下
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
  //还有别的
}
