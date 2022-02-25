import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop/shop.component';
import { RecipeListComponent } from './shop/recipe-list/recipe-list.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductDetailComponent } from './detail/product-detail/product-detail.component';
import { UserDetailComponent } from './detail/user-detail/user-detail.component';
import { CartComponent } from './shop/cart/cart.component';
import { RecipeDetailComponent } from './detail/recipe-detail/recipe-detail.component';
import { ShoppingCartDetailComponent } from './detail/shopping-cart-detail/shopping-cart-detail.component';
import { OrderDetailComponent } from './detail/order-detail/order-detail.component';
import { FavouritesDetailComponent } from './detail/favourites-detail/favourites-detail.component';
import { SearchComponent } from './common/search/search.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'ordersDetail', component: OrderDetailComponent },
  { path: 'favouritesDetail', component: FavouritesDetailComponent },
  { path: 'shoppingcartDetail', component: ShoppingCartDetailComponent },
  { path: 'recipelist', component: RecipeListComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: 'userdetail', component: UserDetailComponent },
  { path: 'recipedetail/:id', component: RecipeDetailComponent },
  { path: 'search/:key', component: SearchComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
