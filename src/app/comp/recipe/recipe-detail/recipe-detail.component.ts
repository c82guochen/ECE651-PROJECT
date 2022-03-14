import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe';
import { Product } from '../../../model/product';
import { CartService } from '../../../services/cart.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem!: Recipe;

  constructor(
    private cartService: CartService,
    private routeInfo: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const recipeId = this.routeInfo.snapshot.paramMap.get('id');
    console.log(recipeId);
    this.recipeService
      .getRecipe(Number(recipeId))
      .subscribe((res) => (this.recipeItem = res[0]));
  }

  handleAddToWishlist() {}

  handleAddAllToCart() {
    console.log(this.recipeItem);
    let arr = this.recipeItem.ingredients_id.map((id) => {
      return { product_id: id, quantity: 1 };
    });
    console.log('Add All to arr');
    console.log(arr);
    this.cartService.addProductsToCart(arr).subscribe((res) => {
      if (res.length > 0) {
        alert('Successfully added to cart');
      } else {
        alert('Sorry cannot add ingredients to kart');
      }
    });
    console.log('adding product to cart');
  }
}
