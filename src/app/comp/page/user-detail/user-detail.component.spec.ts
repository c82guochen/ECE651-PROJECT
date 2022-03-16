import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { RecipeService } from '../../../services/recipe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject, of } from 'rxjs';
import { User } from '../../../model/user';
import { CartItem } from '../../../model/cart';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  let mockUserService = {
    getUser: () => {
      return new BehaviorSubject<User | null>({
        username: 'username',
        // attributes
        id: '',
        token: '',
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
      });
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
});
