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
  index = 5;
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  getCartItems(name: string): Observable<any> {
    return this.http.get<any>(cartUrl);
  }

  //add
  addProductToCart(product: Product): Observable<any> {
    this.index += 1;
    return this.http.post(cartUrl, product);
  }
}
