import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  errorMessage: string = '';
  constructor(private router: Router) {}

  public handleError = (error: HttpErrorResponse) => {
    if (error.status === 500 || 501 || 502 || 503 || 504)
      this.handle500Error(error);

    if (error.status === 401) this.handle401Error(error);
  };

  private handle500Error = (error: HttpErrorResponse) => {
    this.errorMessage = error.message;
    alert('ERROR 500');
    // this.router.navigate(['/500']);
  };

  private handle401Error = (error: HttpErrorResponse) => {
    this.errorMessage = error.message;
    alert('ERROR 401');
    // this.router.navigate(['/401']);
  };
}
