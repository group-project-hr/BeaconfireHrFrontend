import { Component, OnInit, Type } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
})
export class HousingComponent implements OnInit {
  constructor(private housingService: HousingService) {}

  address: string = '';
  employees: { name: string; phone: string }[] = [];

  // test data, can delete
  //   address: string = 'test address';
  //   employeeList: { name: string; phone: string }[] = [
  //     { name: 'Arkar', phone: '123' },
  //     { name: 'Winson', phone: '321' },
  //   ];

  ngOnInit(): void {
    let response = this.housingService.getHouseDetail();
    response.subscribe((data) => {
      const detail = data as HouseDetail;
      this.address = detail.address;
      this.employees = detail.employeeList;
    });
  }

  isHouse = true;
  isReport = false;

  showHouseDetail() {
    this.isHouse = true;
    this.isReport = false;
  }

  showFacilityReport() {
    this.isHouse = false;
    this.isReport = true;
  }
}

type HouseDetail = {
  address: string;
  employeeList: { name: string; phone: string }[];
};

// test typing, can delete
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
};
