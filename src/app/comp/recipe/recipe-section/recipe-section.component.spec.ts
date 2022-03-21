import { ComponentFixture, TestBed,  fakeAsync,  tick } from '@angular/core/testing';
import { RecipeSectionComponent } from './recipe-section.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../model/recipe';
import { Observable, of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RecipeSectionComponent', () => {
  let component: RecipeSectionComponent;
  let fixture: ComponentFixture<RecipeSectionComponent>;
  let recipeService: RecipeService;
  let response: Recipe[];
  let el: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeSectionComponent],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSectionComponent);
    component = fixture.componentInstance;
    recipeService = TestBed.get(RecipeService);
    response = [
      {
        id: 1,
        name: 'test recipe1',
        description: 'recipe desc1',
        image_url:
          'https://www.rockrecipes.com/wp-content/uploads/2016/04/Mongolian-Beef-close-up.jpg',
        category: 'French',
        ingredients_id: [1, 2, 3, 4],
        ingredients_product: [],
        rating: 5,
        total_reviews: 94,
        details: ['aaa', 'bbb']
      },
      {
        id: 2,
        name: 'test recipe2',
        description: 'recipe desc2',
        image_url:
          'https://www.rockrecipes.com/wp-content/uploads/2016/04/Mongolian-Beef-close-up.jpg',
        category: 'French',
        ingredients_id: [1, 2, 3],
        ingredients_product: [],
        rating: 5,
        total_reviews: 90,
        details: ['aaa', 'ccc']
      },
      {
        id: 3,
        name: 'test recipe3',
        description: 'recipe desc3',
        image_url:
          'https://www.rockrecipes.com/wp-content/uploads/2016/04/Mongolian-Beef-close-up.jpg',
        category: 'French',
        ingredients_id: [1, 2],
        ingredients_product: [],
        rating: 5,
        total_reviews: 80,
        details: ['aaa', 'ccc']
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get random integers', () => {
    expect(component.getRndInteger(1, 10)).toBeLessThan(10);
    expect(component.getRndInteger(1, 10)).toBeGreaterThan(0);
  })

  it('should get recipe list', fakeAsync(() => {
    spyOn(recipeService, 'getRecipes').and.returnValue(of<any[]>(response));
    recipeService.getRecipes().subscribe((res) => {
      component.recipeList = res;
    });
    tick();
    expect(component.recipeList).toBe(response);
    el = fixture.debugElement.queryAll(By.css('app-recipe'));
    expect(el).toBeTruthy();
  }));

  it('should produce random 4 recipes', fakeAsync(() => {
    component.recipeList = response;
    console.log(component.recipeList);
//     component.getRandomRecipe();
    spyOn(component,'getRandomRecipe').and.returnValue();
    let num = component.getRndInteger(1,response.length);
    component.recipeSection.push(response[num]);
    console.log(component.recipeSection);
    expect(component.recipeList).toContain(component.recipeSection[0]);
  }));
});
