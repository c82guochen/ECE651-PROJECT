import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSectionComponent } from './recipe-section.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RecipeSectionComponent', () => {
  let component: RecipeSectionComponent;
  let fixture: ComponentFixture<RecipeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeSectionComponent],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
