import { environment } from 'src/environments/environment';

export const baseUrl = 'http://34.130.126.193:8000/api';
// environment.production
//   ? 'https://my-json-server.typicode.com/eugland/lehfront'
//   : 'http://localhost:3000';
export const productsUrl = baseUrl + '/products';
export const recipesUrl = baseUrl + '/recipes';
export const cartUrl = baseUrl + '/cart';
export const favoriteUrl = baseUrl + '/wishlist';
export const authUrl = baseUrl + '/auth';
