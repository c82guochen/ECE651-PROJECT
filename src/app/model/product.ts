export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;

  constructor(
    id: number,
    name: string,
    description = '',
    price = 0,
    category = '',
    image_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image_url = image_url;
  }
}
