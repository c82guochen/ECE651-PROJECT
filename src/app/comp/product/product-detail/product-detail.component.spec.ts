import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { RecipeService } from '../../../services/recipe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from '../../../model/product';
import { CartItem } from '../../../model/cart';
import { formatCurrency } from '@angular/common';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let productService: ProductService;
  let cartService: CartService;
  let response: Product[];
  let cart: CartItem[];
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      providers: [CartService, ProductService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    productService = TestBed.get(ProductService);
    cartService = TestBed.get(CartService);
    response = [{
      id: 0,
      name: 'test-product',
      description: 'desc',
      price: 99,
      image_url:
        'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
      category: 'French'
    }];
    let cart = [{
      id: 0,
      productId: response[0].id,
      qty: 1,
      product: response[0],
    }];
    component.product_qty = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get information of a product item',fakeAsync(() => {
    spyOn(productService, 'getProduct').and.returnValue(of<any[]>(response));
    component.ngOnInit();
    tick();
    expect(component.productItem).toBe(response[0]);
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('img'));
    expect(el.nativeElement.src).toEqual(component.productItem.image_url);
    el = fixture.debugElement.query(By.css('strong.name'));
    expect(el.nativeElement.textContent.trim()).toBe(component.productItem.name);
    el = fixture.debugElement.query(By.css('strong.price'));
    expect(el.nativeElement.textContent.trim()).toBe(formatCurrency(component.productItem.price, 'en_US', '$'));
  }));

  it('can be added to cart',fakeAsync(() => {
    spyOn(cartService,'addProductToCart').and.returnValue(of<any[]>(cart));
    component.addToKart();
    tick();
    expect(cartService.addProductToCart).toHaveBeenCalled();
  }))
});
