import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../model/recipe";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipeItem!: Recipe;
   @Input() addedToWishlist!: boolean;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  //主要的作用有两个，一个add favourite一个全加购物车
  handleAddToWishlist() {

  }

  handleRemoveFromWishlist() {

  }

  addAlltoCart(){
  }
}
