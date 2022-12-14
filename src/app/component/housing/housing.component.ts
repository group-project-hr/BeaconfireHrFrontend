import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
})
export class HousingComponent implements OnInit {
  constructor(private housingService: HousingService) {}

  isHouse = true;
  isReport = false;
  // //  test data, can delete
  //   address: string = 'test address';
  //   employees: { name: string; phone: string }[] = [
  //     { name: 'Arkar', phone: '123' },
  //     { name: 'Winson', phone: '321' },
  //   ];
  address: string = '';
  employees: { firstName: string; ceilPhone: string }[] = [];
  reports: Report[] = [];

  houseReportForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit(): void {
    let response = this.housingService.getHouseDetail();
    response.subscribe((data) => {
      const detail = data as HouseDetail; // assert type
      this.address = detail.address;
      this.employees = detail.employees;
    });
  }

  showHouseDetail() {
    this.isHouse = true;
    this.isReport = false;
  }

  showFacilityReport() {
    this.isHouse = false;
    this.isReport = true;
  }

  submitReport() {
    this.housingService.postHouseReport(
      this.houseReportForm.getRawValue() as Report
    );
  }

  showAllReport() {
    let response = this.housingService.getAllReport();
    response.subscribe((data) => {
      // this works because there's only one key-value pair in the data
      const reports = Object.values(data)[0];
      this.reports = reports;
      console.log(this.reports);
      console.log(this.reports[0].comments);
    });
  }
}

//* TYPES
type HouseDetail = {
  address: string;
  employees: { firstName: string; ceilPhone: string }[];
};

type Report = {
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
