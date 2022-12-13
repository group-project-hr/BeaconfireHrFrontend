import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class HousingService {
  constructor(private http: HttpClient) {}

  getHouseDetail() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users/1');
    return this.http.get('localhost:8080/employee/housing');
  }
}
