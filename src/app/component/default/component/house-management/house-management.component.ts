import { Component, OnInit } from '@angular/core';
import { HouseManagementService } from 'src/app/service/house-management.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-house-management',
  templateUrl: './house-management.component.html',
  styleUrls: ['./house-management.component.css'],
})
export class HouseManagementComponent implements OnInit {
  constructor(
    private houseManagementService: HouseManagementService,
    private housingService: HousingService
  ) {}

  houses: House[] = [];
  isDetail: boolean = false;
  isHouseInfo: boolean = false;
  isFacilityInfo: boolean = false;
  isEmployeeInfo: boolean = false;

  // used in housing details
  selectedHouseId: number = 0;
  houseDetail: House = {} as House;
  facilityDetail: Facility = {} as Facility;
  reports: Report[] = [];
  employeeDetail: Employee[] = [];

  commentForm = new FormGroup({
    comment: new FormControl(''),
  });

  ngOnInit(): void {
    const response = this.houseManagementService.getAllHouses();
    response.then((data: any) => {
      this.houses = data.data as House[];
    });
  }

  goBackList() {
    this.isDetail = false;
    location.reload();
  }

  getHouseDetail(houseId: number) {
    this.isDetail = true;
    this.selectedHouseId = houseId;
  }

  showHouseInfo() {
    this.isHouseInfo = true;
    this.isFacilityInfo = false;
    this.isEmployeeInfo = false;

    this.houseDetail = ((): House => {
      for (let house of this.houses) {
        if (house.id === this.selectedHouseId) return house;
      }
      return {} as House;
    })();

    console.log(this.houseDetail);
  }

  showFacilityInfo() {
    this.isHouseInfo = false;
    this.isFacilityInfo = true;
    this.isEmployeeInfo = false;

    const response = this.houseManagementService
      .getFacilityInfo(this.selectedHouseId)
      .then((data: any) => {
        this.facilityDetail = data.data as Facility;
        console.log(this.facilityDetail);
      });
  }

  showEmployeeInfo() {
    this.isHouseInfo = false;
    this.isFacilityInfo = false;
    this.isEmployeeInfo = true;

    const response = this.houseManagementService
      .getEmployeesInfo(this.selectedHouseId)
      .then((data: any) => {
        this.employeeDetail = data.data as Employee[];
        console.log(this.employeeDetail);
      });
  }

  addComment(reportId: number, index: number) {
    let comment: Comment = {} as Comment;
    comment.description = this.commentForm.getRawValue().comment as string;
    comment.reportId = reportId;

    let response = this.housingService.postReportComment(comment);
    response.then((data: unknown) => {
      this.reports[index].comments.push(
        data as {
          id: number;
          commentDate: string;
          createdBy: string;
          description: string;
        }
      );
    });
  }
}

type House = {
  id: number;
  address: Address;
  landlord: string;
  phone: string;
  email: string;
  numPerson: number;
};

type Address = {
  id: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  zipcode: string;
  stateName: string;
  stateAbbr: string;
};

type Facility = {
  numBed: number;
  numMattress: number;
  numTable: number;
  numChair: number;
  reports: Report[];
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

type Employee = {
  id: number;
  name: string;
  phone: string;
  email: string;
  car: string | null;
};
