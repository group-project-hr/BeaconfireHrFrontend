import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpService } from './http.service';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class HousingService {
  constructor(private http: HttpService) {}

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

    return this.http.post('/api/employee/housing/submit', body, {
      headers,
    });
  }

  getAllReport() {
    return this.http.get('/api/employee/housing/report');
  }

  postReportComment(comment: Comment) {
    const body = JSON.stringify(comment);
    const headers = { 'content-type': 'application/json' };

    return this.http.post('/api/employee/housing/addComment', body, {
      headers,
    });
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

type Comment = {
  reportId: number;
  description: string;
};
