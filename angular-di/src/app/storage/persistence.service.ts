import { Inject, Injectable, InjectionToken } from '@angular/core';

export const STORAGE = new InjectionToken<Storage>('Storage', {
  providedIn: 'root',
  factory: () => localStorage
})

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  constructor(@Inject(STORAGE) public storage: Storage) { }

  set(key: string, data: any): void {
    this.storage.setItem(key, JSON.stringify(data));
  }

  get(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }
}
