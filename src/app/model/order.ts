import { Product } from './product';

export class OrderItem {
  id: number;
  productId: number;
  qty: number;
  product?: Product;
  orderTime: Date;
  deliverTime: Date;

  constructor(
    id: number,
    productId: number,
    qty: number,
    orderTime: Date,
    deliverTime: Date
  ) {
    this.id = id;
    this.productId = productId;
    this.qty = qty;
    //     this.orderTime = new Date();
    //     this.deliverTime = new Date();
    this.orderTime = orderTime;
    this.deliverTime = deliverTime;
  }
}
