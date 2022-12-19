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
  address: Address = {} as Address;
  persons: Person[] = [];
  reports: Report[] = [];

  houseReportForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  commentForm = new FormGroup({
    comment: new FormControl(''),
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
    // response.then({
    //   next: (data: any) => {
    //     const detail = data as HouseDetail;
    //     this.address = detail.address;
    //     this.persons = detail.persons;
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     this.errorService.handleError(err);
    //   },
    // });
    response.then((data: any) => {
      console.log(data);

      const detail = data.data as HouseDetail;
      this.address = detail.address;

      this.persons = detail.persons;
      console.log(this.address);
      console.log(this.persons);
    });
  }

  showFacilityReport() {
    this.isHouse = false;
    this.isReport = true;
    let response = this.housingService.getAllReport();
    response.then((data: any) => {
      // this works because there's only one key-value pair in the data
      const reports = Object.values(data.data)[0];
      this.reports = reports as Report[];
    });
  }

  submitReport() {
    let response = this.housingService.postHouseReport(
      this.houseReportForm.getRawValue() as Report
    );
    response.then((data: any) => {
      this.reports.push(data.data as Report);
    });

    alert('Thank you for your submission');
    this.houseReportForm.reset(); // clear input text
  }

  addComment(reportId: number, index: number) {
    let comment: Comment = {} as Comment;
    comment.description = this.commentForm.getRawValue().comment as string;
    comment.reportId = reportId;

    let response = this.housingService.postReportComment(comment);
    response.then((data: any) => {
      this.reports[index].comments.push(
        data.data as {
          id: number;
          commentDate: string;
          createdBy: string;
          description: string;
        }
      );
    });
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
      id: number;
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
