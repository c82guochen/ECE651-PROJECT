import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavComponent } from './common/nav/nav.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop/shop.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductComponent } from './shop/product/product.component';
import { HttpClientModule } from "@angular/common/http";
import { CartComponent } from './shop/cart/cart.component';
import { CartItemComponent } from './shop/cart-item/cart-item.component';
import { RecipeComponent } from './shop/recipe/recipe.component';
import { RecipeListComponent } from './shop/recipe-list/recipe-list.component';
import { UserDetailComponent } from './detail/user-detail/user-detail.component';
import { ProductDetailComponent} from './detail/product-detail/product-detail.component';
import { RecipeDetailComponent } from './detail/recipe-detail/recipe-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './common/rating/rating.component';
import { CarouselComponent } from './common/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
    ShopComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CartItemComponent,
    RecipeComponent,
    RecipeListComponent,
    UserDetailComponent,
    ProductDetailComponent,
    RecipeDetailComponent,
    ProductDetailComponent,
    RatingComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
