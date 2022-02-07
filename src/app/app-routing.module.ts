import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";
import {ShopComponent} from "./shop/shop/shop.component";
import {RecipeComponent} from "./shop/recipe/recipe.component"

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'recipe', component: RecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
