import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { HttpErrorResponse } from '@angular/common/http';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class HousingService {
  constructor(private http: HttpClient) {}

  getHouseDetail() {
    return this.http.get('/api/employee/housing');
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
      .subscribe((data) => {
        console.log(data);
      }); // if want check response then subscribe()
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
