import { Component, OnInit } from '@angular/core';
import { map, Observable, Observer, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../model/recipe';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  recipe: any[] = [];
  ifLogin = true;
  collapsedShow = false;
  collapsedShowState = '';
  search_text = '';

  constructor(
    private recipeService: RecipeService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((it) => {
      this.recipe.push(...it);
    });

    this.productService.getProducts().subscribe((it) => {
      this.recipe.push(...it);
    });
  }

  look() {
    this.router.navigate(['/search', this.search_text]);
  }
}
