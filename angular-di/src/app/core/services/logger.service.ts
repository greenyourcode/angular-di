import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  name = 'LoggerService';

  constructor() { 
    console.log('logger service');
  }
}
