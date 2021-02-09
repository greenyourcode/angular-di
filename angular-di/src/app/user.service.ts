import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any' // 'any': limiting service to one module (if lazy-loading is active) 
})
export class UserService {
  data: string;

  constructor() { }

  setData(newData: string) {
    this.data = newData;
  }

  getData() {
    return this.data;
  }
}
