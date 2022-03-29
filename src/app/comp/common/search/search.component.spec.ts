import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './search.component';
import { RecipeService } from '../../../services/recipe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from '../../../services/product.service';
import { Recipe } from '../../../model/recipe';
import { Observable, of } from 'rxjs';
import { Product } from '../../../model/product';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let recipeServiceStub: Partial<RecipeService> = {
    getRecipeByName(text): Observable<Recipe[]> {
      return of([{
        id: 1,
        name: text,
        description: 's',
        image_url: 's',
        category: 's',
        ingredients_id: [],
        ingredients_product: [],
        rating: 1,
        total_reviews: 1,
        details: {}
      }]);
    }
  };

  let productServiceStub: Partial<ProductService> = {
    getProductByName(text): Observable<Product[]> {
      return of([{
        id: 1,
        name: text,
        description: 's',
        price: 1,
        image_url: 's',
        category: 's'
      }]);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        {
          provide: RecipeService,
          useValue: recipeServiceStub
        },
        {
          provide: ProductService,
          useVale: productServiceStub
        }],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
