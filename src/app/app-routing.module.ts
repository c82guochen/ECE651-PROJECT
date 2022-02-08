import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";
import {ShopComponent} from "./shop/shop/shop.component";
import {RecipeListComponent} from "./shop/recipe-list/recipe-list.component";
import {ProductListComponent} from "./shop/product-list/product-list.component";
import {ProductDetailComponent} from "./detail/product-detail/product-detail.component"
import {UserDetailComponent} from "./detail/user-detail/user-detail.component"

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'recipelist', component: RecipeListComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: 'userdetail', component: UserDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
