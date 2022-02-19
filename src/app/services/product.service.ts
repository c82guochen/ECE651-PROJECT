import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../model/product';

import { productsUrl } from 'src/app/config/api';





@Injectable({
  providedIn: 'root'
})
export class ProductService {

  local_products = new Map<number, Product>();

  constructor(private http: HttpClient) {
  }

  getProduct(id: number): Product {
    return this.local_products.get(id) as Product;
  }

  httpOptions = {
    headers: new HttpHeaders()
  };
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl, this.httpOptions).pipe(
      map((res: Product[]) => {
        console.log('get product invoke ');
        for (let item of res) {
          this.local_products.set(item.id, item);
        }
        console.log(this.local_products);
        return res;
      }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
