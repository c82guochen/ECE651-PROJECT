import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './comp/common/notfound/page-not-found.component';
import { ShopComponent } from './comp/shop/shop.component';
import { RecipeListComponent } from './comp/recipe/recipe-list/recipe-list.component';
import { ProductListComponent } from './comp/product/product-list/product-list.component';
import { ProductDetailComponent } from './comp/product/product-detail/product-detail.component';
import { UserDetailComponent } from './comp/page/user-detail/user-detail.component';
import { CartComponent } from './comp/cart/cart-list/cart.component';
import { RecipeDetailComponent } from './comp/recipe/recipe-detail/recipe-detail.component';
import { ShoppingCartDetailComponent } from './comp/cart/shopping-cart-detail/shopping-cart-detail.component';
import { OrderDetailComponent } from './comp/page/order-detail/order-detail.component';
import { FavouritesDetailComponent } from './comp/page/favourites-detail/favourites-detail.component';
import { SearchComponent } from './comp/common/search/search.component';
import { LoginComponent } from './comp/account/login/login.component';
import { SignupComponent } from './comp/account/signup/signup.component';

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
