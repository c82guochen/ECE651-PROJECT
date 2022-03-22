import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import { RecipeService } from '../../../services/recipe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject, of } from 'rxjs';
import { User } from '../../../model/user';
import { CartItem } from '../../../model/cart';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let mockUser: User = {
    username: 'username',
    id: '',
    token: 'token',
    email: '',
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
  let mockShipping_address: any = {
    address : 'address',
    province : 'address',
    postal_code : 'code',
    phone_number : 'telephone',
  };
  let mockUserHttp: any = {
    username: 'username',
    id: '',
    token: 'token',
    email: '',
    credit_card: '',
    shipping_address: null,
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
  let mockUserService = {
    getUser: () => {
      return new BehaviorSubject<User | null>({
        username: 'username',
        // attributes
        id: '',
        token: 'token',
        email: '',
        credit_card: '',
        shipping_address: '',

        // date
        last_login: new Date(),
        date_joined: new Date(),
        expiry: new Date(),
        // Types
        is_active: true,
        is_staff: false,
        is_superuser: false,

        // Collections
        cart_items: [],
        orders: [],
        fav_recipes: [],
        groups: [],
        user_permissions: []
      })
    },
    UpdateUser: (
      userInfo: any,
      cardID: string,
      telephone: string,
      address: string,
      province: string,
      postal_code: string,
      userToken: any
    ) => {
      userInfo.credit_card = cardID;
      userInfo.shipping_address =  address + '' + province + ' ' + postal_code + ' ' + telephone;
      return userInfo;
    },
    setUserToken: () => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      providers: [{ provide: UserService, useValue: mockUserService }],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //首先要获得User

  //得到user显示出来
  it('should show user information to view after login', () => {
    let el: DebugElement;
    mockUserHttp.shipping_address = mockShipping_address;
    component.userInfo = mockUserHttp;
    console.log('     f ser ',component.userInfo);
    el = fixture.debugElement.query(By.css('p.name'));
    console.log(component.isChanging);
    expect(el.nativeElement.textContent).toBe(component.userInfo.username);
    el = fixture.debugElement.query(By.css('span.emptyContent'));
    expect(el.nativeElement.textContent).toBe(component.emptyString);
    el = fixture.debugElement.query(By.css('span.card'));
    console.log(el);
    expect(el.nativeElement.textContent).toBe(component.userInfo.credit_card);
//     el = fixture.debugElement.query(By.css('span.shippingAddress'));
//     expect(el.nativeElement.textContent).toBe(component.userInfo.shipping_address.address+', '+component.userInfo.shipping_address.province+', '+component.userInfo.shipping_address.postal_code);
  })

  //考虑要不要传递usertoken

  //测试一下JudgeNull（简单）
  it('should judge if information of user is null', () => {
    let mockUser: User = {
      username: 'username',
      id: '',
      token: 'token',
      email: '',
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
    let mockShipping_address: any = {
      address : 'address',
      province : 'address',
      postal_code : 'code',
      phone_number : 'telephone',
    };
    let mockUserHttp: any = {
      username: 'username',
      id: '',
      token: 'token',
      email: '',
      credit_card: '',
      shipping_address: null,
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
    component.userInfo = mockUser;
    component.JudgeIfNull();
    expect(component.ifcardNull).toBe(true);
    expect(component.ifaddressNull).toBe(true);
    expect(component.iftelephoneNull).toBe(true);
    mockUserHttp.credit_card = '1234';
    component.userInfo = mockUserHttp;
    component.JudgeIfNull();
    expect(component.ifcardNull).toBe(false);
    expect(component.ifaddressNull).toBe(true);
    expect(component.iftelephoneNull).toBe(true);
    mockUserHttp.shipping_address = mockShipping_address;
    component.userInfo = mockUserHttp;
    component.JudgeIfNull();
    expect(component.ifaddressNull).toBe(false);
    expect(component.iftelephoneNull).toBe(false);
  })

  //测试一下Change()
  it('should provide form for user to complete information', () => {
    expect(component.isChanging).toBe(false);
    let el: DebugElement;
    el = fixture.debugElement.query(By.css('button.change'));
    el.nativeElement.click();
    expect(component.isChanging).toBe(true);
  })
  //Submit，UpdateSucc和updateFail



});
