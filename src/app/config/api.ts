import { environment } from 'src/environments/environment'
//environment代表了什么？
export const baseUrl = environment.production? 'https://my-json-server.typicode.com/eugland/lehfront' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const recipesUrl = baseUrl + '/recipes'
export const cartUrl = baseUrl + '/cart'
export const favoriteUrl = baseUrl + '/wishlist'
