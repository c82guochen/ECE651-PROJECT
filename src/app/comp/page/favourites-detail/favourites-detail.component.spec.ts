import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesDetailComponent } from './favourites-detail.component';

describe('FavouritesDetailComponent', () => {
  let component: FavouritesDetailComponent;
  let fixture: ComponentFixture<FavouritesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouritesDetailComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
