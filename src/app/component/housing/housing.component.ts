import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HousingService } from 'src/app/service/housing.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
})
export class HousingComponent implements OnInit {
  constructor(
    private housingService: HousingService,
    private errorService: ErrorHandlingService
  ) {}

  isHouse = true;
  isReport = false;
  // //  test data, can delete
  //   address: string = 'test address';
  //   employees: { name: string; phone: string }[] = [
  //     { name: 'Arkar', phone: '123' },
  //     { name: 'Winson', phone: '321' },
  //   ];
  address: Address = {} as Address;
  persons: Person[] = [];
  reports: Report[] = [];

  houseReportForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit(): void {
    // let response = this.housingService.getHouseDetail();
    // response.subscribe((data) => {
    //   const detail = data as HouseDetail; // assert type
    //   this.address = detail.address;
    //   this.persons = detail.persons;
    // });
  }

  showHouseDetail() {
    this.isHouse = true;
    this.isReport = false;
    let response = this.housingService.getHouseDetail();
    response.subscribe({
      next: (data) => {
        const detail = data as HouseDetail;
        this.address = detail.address;
        this.persons = detail.persons;
      },
      error: (err: HttpErrorResponse) => {
        this.errorService.handleError(err);
      },
    });
  }

  showFacilityReport() {
    this.isHouse = false;
    this.isReport = true;
    let response = this.housingService.getAllReport();
    response.subscribe((data) => {
      // this works because there's only one key-value pair in the data
      const reports = Object.values(data)[0];
      this.reports = reports;
      console.log(this.reports);
      console.log(this.reports[0].comments);
    });
  }

  submitReport() {
    this.housingService.postHouseReport(
      this.houseReportForm.getRawValue() as Report
    );
  }
}

//* TYPES
type Address = {
  id: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  zipcode: string;
  stateName: string;
  stateAbbr: string;
};

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  preferredName: string;
  address: Address;
  email: string;
  ceilPhone: string;
  workPhone: string;
};

// type HouseDetail = {
//   address: Address;
//   employees: { firstName: string; preferredName: string; ceilPhone: string }[];
// };

type HouseDetail = {
  address: Address;
  persons: Person[];
};

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
