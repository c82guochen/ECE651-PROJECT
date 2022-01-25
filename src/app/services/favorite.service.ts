import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) {}

  getFavorite() {
    return this.http.get<{id: number}[]>(favoriteUrl).pipe(
      map((result: {id: number}[]) => result.map((item)=>item.id))
    )
  }
}
