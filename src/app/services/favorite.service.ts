import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { favoriteUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor(private http: HttpClient) {}

  getFavorite() {
    return this.http
      .get<{ id: number }[]>(favoriteUrl)
      .pipe(map((result: { id: number }[]) => result.map((item) => item.id))); //result一定有id这个属性，还有可能会有别的属性
    // 关于=>需要进行理解(聊天记录)
  }
}
