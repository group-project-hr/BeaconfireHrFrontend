import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class HousingService {
  constructor(private http: HttpClient) {}

  getHouseDetail() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users/1');
    return this.http.get('/api/employee/housing');
  }

  postHouseReport(report: Report) {
    const body = JSON.stringify(report);
    const headers = {
      'content-type': 'application/json',
    };

    this.http
      .post<string>('/api/employee/housing/submit', body, { headers })
      .subscribe(); // if want check response then subscribe()
  }

  getAllReport() {
    return this.http.get('/api/employee/report');
  }
}

type Report = {
  title: string;
  description: string;
};
