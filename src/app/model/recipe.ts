import { Product } from './product';

export class Recipe {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: string;
  ingredients_id: number[];
  ingredients_product: Product[];
  rating: number;
  total_reviews: number;
  //   detail:[];
  isFavourite: boolean;

  constructor(
    id: number,
    name: string,
    description = '',
    category = '',
    //     detail = NULL,
    ingredients_id = [],
    ingredients_product = [],
    rating = 0,
    total_reviews = 0,
    isFavourite = false,
    image_url = ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image_url = image_url;
    this.category = category;
    this.ingredients_id = ingredients_id;
    this.ingredients_product = ingredients_product;
    this.rating = rating;
    this.total_reviews = total_reviews;
    this.isFavourite = isFavourite;
    //     this.detail = detail
  }
}
