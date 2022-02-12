import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Product } from '../../model/product';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

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
    this.recipeItem = this.recipeService.getRecipe(Number(recipeId));
    console.log(this.recipeItem);
  }

  handleAddToWishlist() {}

  handleAddAllToCart() {}
  //待完成
}
