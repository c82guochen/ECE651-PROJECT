import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Recipe} from "../model/recipe";

import { recipesUrl } from 'src/app/config/api';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  local_recipes = new Map<number, Recipe>()

  constructor(private http: HttpClient) { }
  getRecipe(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(recipesUrl).pipe(
      map((res: Recipe[])=> {
        console.log("get recipe invoke ")
        for (let item of res) {
          this.local_recipes.set(item.id, item)
        }
        console.log(this.local_recipes)
        return res
      })
    )
  }
}
