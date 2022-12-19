import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpService } from 'src/app/service/http.service';
import {StorageService} from "../../../../service/storage.service";
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-application-form-show',
  templateUrl: './applilcation-form-show.component.html',
  styleUrls: ['./applilcation-form-show.component.css']
})
export class ApplilcationFormShowComponent implements OnInit {
  user_info: Array<any> ;
  user_info_list : Array<any>;
  constructor(private http: HttpService, private httpClient: HttpClient,private storage:StorageService,private fb: UntypedFormBuilder) {
    this.user_info_list = [];
    this.user_info = [];
  }
  //FIXME Change the userID
  userId: number | undefined;
  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.addField();

    let user_info_response = this.httpClient.get<any[]>('/api/hr/application_workflow')
      .subscribe(Response => {
        this.user_info_list = Response.map(
          data => {
            console.log(data.id);
            return {

              id: data.id,
              employee_id:data.employee.id,
              name: data.employee.person.firstName + ' ' + data.employee.person.lastName,
              person_id:data.employee.person.id,
              perferred_name:data.employee.person.perferredName,
              address:data.employee.person.address.addressLine1+data.employee.person.address.addressLine2,
              city:data.employee.person.address.city,
              zipcode:data.employee.person.address.zipcode,
              state_name:data.employee.person.address.stateName,
              state_abbr:data.employee.person.address.stateAbbr,
              email:data.employee.person.email,
              ceilphone:data.employee.person.ceilPhone,
              workphone:data.employee.person.workPhone,
              gender:data.employee.gender,
              ssn:data.employee.ssn,
              car_info:data.employee.carInfo,
              birth_date:data.employee.birthDate,
              license_number:data.employee.licenseNumber,
              license_expir:data.employee.licenseExpirationDate,
              modification_date:data.modificationDate,
              created_date:data.createdDate,
              status:data.appStatus,
              comments:data.comments,
              app_type:data.appType,

            }
          }
        )
      });

  }
  goToLink(url: string){
    window.open(url, "_blank");
  }


  validateForm!: UntypedFormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];


  // Controls can also be enabled/disabled after creation:


  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `column${id}`
    };
    const index = this.listOfControl.push(control);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new UntypedFormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  submitForm(i:number): void {
    if (this.validateForm.valid) {
      let info = this.validateForm.value
      // @ts-ignore
      info.employeeId=this.user_info_list[i].employee_id;
      console.log(info);
      this.http.post('/api/hr/update_application_form', info)
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    // location.reload();
  }

  approveStatus(i: any) {
    let info = this.validateForm.value
    // @ts-ignore
    info.employeeId=this.user_info_list[i].employee_id;
    info.status="completed"
    console.log("ddd"+info.employeeId);
    this.http.post('/api/hr/update_application_form/status', info)
    // location.reload();
  }

  declineStatus(i: any) {
    let info = this.validateForm.value
    // @ts-ignore
    info.employeeId=this.user_info_list[i].employee_id;
    info.status="rejected"
    this.http.post('/api/hr/update_application_form/status', info)
    // location.reload();
  }
}
