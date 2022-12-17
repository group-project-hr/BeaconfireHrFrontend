import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {

  }
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string) {
    let item = localStorage.getItem(key)
    if (item === null) {
      return
    }
    return JSON.parse(item)
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }

}
