import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class HouseManagementService {
  constructor(private http: HttpService) {}

  getAllHouses() {
    return this.http.get('/api/hr/housing');
  }

  getFacilityInfo(houseId: number) {
    return this.http.get(`/api/hr/housing/facility/${houseId}`);
  }

  getEmployeesInfo(houseId: number) {
    return this.http.get(`/api/hr/housing/employees/${houseId}`);
  }
}
