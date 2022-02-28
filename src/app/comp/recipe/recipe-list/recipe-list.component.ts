import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe';
import { Product } from '../../../model/product';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [];
  wishlist: number[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipes();
    this.loadWishlist();
  }

  loadRecipes() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipeList = recipes;
    });
  }
  getRandomRecipe() {
    var randomNumbers = new Array(4);
    for (var i = 0; i < 4; i++) {
      var Rand = Math.random();
      randomNumbers.push(Math.round(Rand * this.recipeList.length));
    }
    var recipeSection = new Array(4);
    for (var i = 0; i < 4; i++)
      recipeSection.push(this.recipeList[randomNumbers[i]]);
  }

  loadWishlist() {}
}
