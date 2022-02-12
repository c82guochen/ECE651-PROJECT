import { Product } from './product';

export class Recipe {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  ingredients_id: number[];
  ingredients_product: Product[];
  review_rating: number;
  review_qty: number;
  isFavourite: boolean; //登录之后才可以修改

  constructor(
    id: number,
    name: string,
    description = '',
    category = '',
    ingredients_id = [],
    ingredients_product = [],
    review_rating = 0,
    review_qty = 0,
    isFavourite = false,
    imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.category = category;
    this.ingredients_id = ingredients_id;
    this.ingredients_product = ingredients_product; //不清楚对不对……
    this.review_rating = review_rating;
    this.review_qty = review_qty;
    this.isFavourite = isFavourite;
  }
}
