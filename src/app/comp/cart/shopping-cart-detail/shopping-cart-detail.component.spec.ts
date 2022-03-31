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
    id: 10,
    name: 'test-product1',
    description: 'desc',
    price: 10,
    image_url:
      'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
    category: 'French'
  }
  let mock_product2:Product = {
    id: 11,
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

  it('should get order list', fakeAsync(() => {
    let mockUser: BehaviorSubject<User | null> =
      new BehaviorSubject<User | null>({
        expiry: new Date("2022-03-28T17:59:57.566575Z"),
        token: "2fa1a29afde6e251d7cbb6fc328106e4ef309938dccb7522bf5ec8683bbdb1de",
        id: "a534b0e6-a681-4d24-a403-dd9876dbc862",
        cart_items: [],
        orders:[],
        shipping_address: "sd",
        last_login: new Date("2022-03-28T07:59:57.568441Z"),
        is_superuser: false,
        is_staff: false,
        is_active: true,
        date_joined: new Date("2022-03-07T15:58:51.345334Z"),
        username: "eugene",
        email: "eugene.r.w.12@gmail.com",
        credit_card: "2222333311117777",
        groups: [],
        user_permissions: [],
        fav_recipes: []
      });
    spyOn(userService, 'getUser').and.returnValue(mockUser);
    // let user: any;
    // userService.getUser().subscribe((res: any) => {
    //   user = res;
    // });
    // expect(user).toBe(mockUser);
    spyOn(cartService, 'getCartItems').and.returnValue(of<any>(cart));
    component.ngOnInit();
    tick()
    expect(component.kart).toBe(cart);
  }));

  it('should delete a product', fakeAsync(() => {
    let mock_cart = cart;
    component.kart = cart;
    spyOn(cartService, 'delProduct').and.callThrough();
    component.delete(10)
    expect(cartService.delProduct).toHaveBeenCalled();


  }));

  // it('should get total price', fakeAsync(() => {
  //   component.kart = cart;
  //   spyOn(cartService,'delProduct').and.returnValue(of<any>(cart))
  //   component.delete(10)
  //   expect(component.total_price).toBe(110)
  //   // cartService.delProduct(10).subscribe((res:any)=> {component.kart = res as any[];
  //   //   component.total_price = 0;
  //   //   console.log('res = ', res)
  //   //   for (let item of res as any[]) {
  //   //     component.total_price += item.product.price * item.qty;
  //   //   }
  //   //   expect(component.total_price).toBe(110)
  //   // })
  //   //   tick()
  //   //   console.log('price = ',component.total_price)

  // }));



  it('should invoke delete button', fakeAsync(() => {
    component.kart = cart;
    fixture.detectChanges();
    expect(component.delete).toBeTruthy()
    spyOn(component, 'delete');
    let button1 = fixture.debugElement.nativeElement.querySelector('button#delete-btn');
    button1.click();
    tick();
    expect(component.delete).toHaveBeenCalled();
  }));

  it('test order', () => {
    let mock_product1:Product = {
      id: 10,
      name: 'test-product1',
      description: 'desc',
      price: 10,
      image_url:
        'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
      category: 'French'
    }
    let mock_product2:Product = {
      id: 11,
      name: 'test-product2',
      description: 'desc',
      price: 100,
      image_url:
        'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
      category: 'French'
    }

    let mock_cart:any[] = [
      { id: 1,
        productId: 10,
        quantity: 1,
        product:mock_product1,
      },
      {
        id: 2,
        productId: 11,
        quantity: 1,
        product:mock_product2,
      }
    ]
    component.kart = mock_cart;
    let flag:boolean = true;
    component.card = '123'
    component.address = '1234'
    component.placeOrder()
    console.log('order = ', component.order)
    console.log('kart = ', component.kart)
    let checkout1:CheckoutOrder = {product_id:10, quantity:1}
    let checkout2:CheckoutOrder = {product_id:11, quantity:1}
    let expect_order = [checkout1,checkout2]
    expect(component.order).toEqual(expect_order)

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

  it('should delete an item and calculate total price again',() => {
    let cart: any[] = [
    { id: 1,
      productId: 10,
      quantity: 1,
      product:mock_product1,
    },
    {
      id: 2,
      productId: 11,
      quantity: 1,
      product:mock_product2,
    }
  ];
    spyOn(cartService,'delProduct').and.returnValue(of<any>(cart));
    component.delete(10);
    expect(cartService.delProduct).toHaveBeenCalled();
  });
});

// describe('UserService', () => {
//   let userService: UserService;
//   let mockUserHttp: any = SAMPLE_USER;

//   let mockUser: User = {
//     username: 'username',
//     id: '',
//     token: 'token',
//     email: 'email',
//     credit_card: '',
//     shipping_address: '',
//     last_login: new Date(),
//     date_joined: new Date(),
//     expiry: new Date(),
//     is_active: true,
//     is_staff: false,
//     is_superuser: false,
//     cart_items: [],
//     orders: [],
//     fav_recipes: [],
//     groups: [],
//     user_permissions: []
//   };
//   let userSubject = new BehaviorSubject<User | null>(null);
//   beforeEach(() => { userService = new UserService(mockUserHttp); });

//   it('should get user behavior subject', () => {
//     expect(userService.getUser()).toEqual(userSubject);
//   });

//   it('should signin an account successfully', () =>{
//     spyOn(userService,'login').and.returnValue(of<User>(mockUser));
//     component.onSigninSuccess(mockUser);
//     expect(component.isSuccessful).toBe(true);
//     expect(component.isLoginFailed).toBe(false);
//     let user: any;
//     userService.getUser().subscribe((res: any) => {
//       user = res;
//     });
//     expect(user).toBe(mockUser);
//     expect(userService.getIfLogin()).toBe(true);
//   })
// });



