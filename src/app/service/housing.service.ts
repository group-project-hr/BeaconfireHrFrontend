import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class HousingService {
  constructor(private http: HttpClient) {}

  getHouseDetail() {
    // todo: hardcoded pathvariable, change it later
    return this.http.get('/api/employee/housing/3');
  }

  postHouseReport(report: Report) {
    // todo: hardcoded id, change it using localStorage later
    report.id = 3;
    const body = JSON.stringify(report);
    const headers = {
      'content-type': 'application/json',
    };

    this.http
      .post<string>('/api/employee/housing/submit', body, { headers })
      .subscribe(); // if want check response then subscribe()
  }

  getAllReport() {
    return this.http.get('/api/employee/housing/report');
  }
}

// type Report = {
//   title: string;
//   description: string;

// };
type Report = {
  id: number;
  title: string;
  description: string;
  createdBy: string;
  reportDate: string;
  status: string;
  comments: [
    {
      description: string;
      createdBy: string;
      commentDate: string;
    }
  ];
};
