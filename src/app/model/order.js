import { Product } from './product';

export class OrderItem {
  id: number;
  productId: number;
  qty: number;
  product: Product;
  orderTime: string;
  deliverTime: string;


  constructor(id: number, productId: number, qty: number) {
    this.id = id;
    this.productId = productId;
    this.qty = qty;
    this.product = new Product(0, "placeholder")
    this.orderTime = orderTime
    this.deliverTime = deliverTime
  }
}
