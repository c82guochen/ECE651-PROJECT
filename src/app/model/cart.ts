import { Product } from './product';

export class CartItem {
  id: number;
  productId: number;
  qty: number;
  product: Product;

  constructor(id: number, productId: number, qty: number) {
    this.id = id;
    this.productId = productId;
    this.qty = qty;
    this.product = new Product(0, 'placeholder');
  }
}
