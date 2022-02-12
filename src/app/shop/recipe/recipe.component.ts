import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  @Input() recipeItem!: Recipe;
  @Input() addedToWishlist!: boolean;
  constructor(private cartService: CartService) {}

  handleAddToWishlist() {}

  handleRemoveFromWishlist() {}

  addAlltoCart() {}
}
