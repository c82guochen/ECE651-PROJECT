import { CartItem } from './cart';
import { Product } from './product';
import { Recipe } from './recipe';

export class User {
  id: number;
  imageUrl: string;
  name: string;
  cardNumber: string;
  phoneNumber: string;
  address: string;
  email: string;
  password: string;
  cartList: CartItem[];
  ordersList: CartItem[]; //order的数据类型应该是order
  favouritesList: Recipe[];

  constructor(
    id = 0,
    imageUrl = '',
    name = '',
    cardNumber = '',
    phoneNumber = '',
    address = '',
    email = '',
    password = '',
    cartList = [],
    ordersList = [],
    favouritesList = []
  ) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.cardNumber = cardNumber;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.email = email;
    this.password = password;
    this.cartList = cartList;
    this.ordersList = ordersList;
    this.favouritesList = favouritesList;
  }
}
