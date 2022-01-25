import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  sub = new Subject();

  constructor() { }

  sendMsg(item: unknown) {
    // Todo handle what is being sent: only product for now
    this.sub.next(item)
  }

  getMsg() {
    return this.sub.asObservable()
  }
}
