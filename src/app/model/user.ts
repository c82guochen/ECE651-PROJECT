import { CartItem } from './cart';
import { Product } from './product';
import { Recipe } from './recipe';

export class User {
  id: number;
  //   imageUrl: string;
  username: string;
  email: string;
  //   cardNumber: string;
  //   phoneNumber: string;
  shipping_address: string;

  password: string;
  cart_items: CartItem[];
  orders: CartItem[];
  fav_recipes: Recipe[];

  constructor(
    id = 0,
    //     imageUrl = '',
    username = '',
    //     cardNumber = '',
    //     phoneNumber = '',
    shipping_address = '',
    email = '',
    password = '',
    cart_items = [],
    orders = [],
    fav_recipes = []
  ) {
    this.id = id;
    //     this.imageUrl = imageUrl;
    this.username = username;
    //     this.cardNumber = cardNumber;
    //     this.phoneNumber = phoneNumber;
    this.shipping_address = shipping_address;
    this.email = email;
    this.password = password;
    this.cart_items = cart_items;
    this.orders = orders;
    this.fav_recipes = fav_recipes;
  }
}
