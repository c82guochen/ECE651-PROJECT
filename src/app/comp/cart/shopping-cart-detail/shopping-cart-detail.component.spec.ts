import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ShoppingCartDetailComponent } from './shopping-cart-detail.component';
import { RecipeService } from '../../../services/recipe.service';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { CartItem } from '../../../model/cart';
import { CheckoutOrder } from 'src/app/model/checkout';
import { Product } from '../../../model/product';
import { User } from '../../../model/user';
import { DebugElement } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { SAMPLE_USER } from '../../../testdata/test.data';
import { formatCurrency } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { HttpTestingController } from '@angular/common/http/testing';

describe('ShoppingCartDetailComponent', () => {
  let component: ShoppingCartDetailComponent;
  let fixture: ComponentFixture<ShoppingCartDetailComponent>;
  let cartService: CartService;
  let userService: UserService;
  let cart: CartItem[];
  let el: DebugElement;
  let checkoutOrder: CheckoutOrder;
  let mockUser = SAMPLE_USER;
  
  let mock_product1:Product = {
    id: 1,
    name: 'test-product1',
    description: 'desc',
    price: 10,
    image_url:
      'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
    category: 'French'
  }
  let mock_product2:Product = {
    id: 2,
    name: 'test-product2',
    description: 'desc',
    price: 100,
    image_url:
      'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
    category: 'French'
  }
  cart = [
    { id: 1,
      productId: 10,
      qty: 1,
      product:mock_product1,
    },
    {
      id: 2,
      productId: 11,
      qty: 1,
      product:mock_product2,
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartDetailComponent],
      providers: [CartService, UserService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cartService = TestBed.get(CartService);
    userService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not place order, address empty', () => {
    component.address=''
    expect(component.placeOrder()).toBeFalsy();
  });

  it('should not place order, card empty', () => {
    component.card=''
    component.address='123'
    expect(component.placeOrder()).toBeFalsy();
  });

  it('should place order', () => {
    component.address='111 road'
    component.card='1111222233334444'
    expect(component.placeOrder()).toBeTruthy();
  });

  it('should invoke place order button', fakeAsync(() => {
    fixture.detectChanges();
    expect(component.placeOrder).toBeTruthy()
    spyOn(component, 'placeOrder');
    let button = fixture.debugElement.nativeElement.querySelector('button#order-btn');
    button.click();
    tick();
    expect(component.placeOrder).toHaveBeenCalled();
  }));

  it('should display address', fakeAsync(() => {
    let el: DebugElement;
    component.address = SAMPLE_USER.shipping_address;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('div.address'));
    expect(el.nativeElement.textContent.trim()).toBe('Address: '+ component.address);
  }));

  it('should display total price', fakeAsync(() => {
    component.kart = cart;
    component.total_price = 110;
    fixture.detectChanges();

    let el: DebugElement;
    el = fixture.debugElement.query(By.css('div.price'));
    expect(el.nativeElement.textContent.trim()).toBe('price total: '+ formatCurrency(component.total_price, 'en_US', '$'));
  }));
  it('should display address', fakeAsync(() => {
    let el: DebugElement;
    component.address = SAMPLE_USER.shipping_address;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('div.address'));
    expect(el.nativeElement.textContent.trim()).toBe('Address: '+ component.address);
  }));

  it('should display card', fakeAsync(() => {
    let el: DebugElement;
    component.card = SAMPLE_USER.credit_card;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('div.card'));
    expect(el.nativeElement.textContent.trim()).toBe('Card number: '+ component.card);
  }));
});

describe('UserService', () => {
  let userService: UserService;
  let mockUserHttp: any = SAMPLE_USER;

  let mockUser: User = {
    username: 'username',
    id: '',
    token: 'token',
    email: 'email',
    credit_card: '',
    shipping_address: '',
    last_login: new Date(),
    date_joined: new Date(),
    expiry: new Date(),
    is_active: true,
    is_staff: false,
    is_superuser: false,
    cart_items: [],
    orders: [],
    fav_recipes: [],
    groups: [],
    user_permissions: []
  };
  let userSubject = new BehaviorSubject<User | null>(null);
  beforeEach(() => { userService = new UserService(mockUserHttp); });

  it('should get user behavior subject', () => {
    expect(userService.getUser()).toEqual(userSubject);
  });
});



