import { Injectable } from '@angular/core';

@Injectable() // no root scope so that's not a singleton service
export class OrderListService {
  orderList = ['order0'];

  constructor() { }

  getName() {
    return this.orderList.toString();
  }

  setName(item:string) {
    this.orderList.push(item);
  }
}
