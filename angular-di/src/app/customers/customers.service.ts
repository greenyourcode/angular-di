import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class CustomersService {

  constructor() { }

  displayName() {
    return 'CustomersService';
  }
}
