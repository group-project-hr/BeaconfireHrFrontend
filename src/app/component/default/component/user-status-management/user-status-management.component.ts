import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {ControlValueAccessor, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-user-status-management',
  templateUrl: './user-status-management.component.html',
  styleUrls: ['./user-status-management.component.css']
})
export class UserStatusManagementComponent implements OnInit {

  currentDate = new Date();
  documents_show: "Documents SHow" | undefined;
  files: Array<any>;
  user_status_info_list: Array<any>;
  opt_step: any;

  constructor(private http: HttpService, private httpClient: HttpClient,private el: ElementRef,private fb: UntypedFormBuilder) {
    this.user_status_info_list = [];
    this.files = [];
  }

  documents_received(userid: string): void {
    let files_response = this.httpClient.get<any[]>('/api/visa/employee/fileslist/' + userid)
      .subscribe(Response => {
        this.files = Response.map(
          data => {
            return {
              id: data.id,
              employeeid: data.employee.id,
              path: data.docPath,
              title: data.title,
              comment: data.comment,
              created_date: data.created_date,
              created_by: data.created_by
            }
          }
        )
      });
    let opt_repsonse = this.httpClient.get<any>('/api/visa/employee/' + userid)
      .subscribe(
        (data: any) =>
        {
          this.opt_step = data.optStep;
        });
  }

  // @ts-ignore
  days_between(date1, date2) {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);

  }


  validateForm!: UntypedFormGroup;


  ngOnInit(): void {


    this.validateForm = this.fb.group({
      name:[null],
      work_authorization:[null],
      startDate: [null],
      endDate:[null],
      userId:[]
    });


    let user_info_response = this.httpClient.get<any[]>('/api/visa/visastatus_info')
      .subscribe(Response => {
        this.user_status_info_list = Response.map(
          data => {
            console.log(data.id);
            return {

              id: data.id,
              name: data.person.firstName + ' ' + data.person.lastName,
              //TODO string type
              work_authorization: data.visaStatus.workAuthorization,
              // expiration:this.currentDate
              // green card and citizen has no end date
              endDate: data.visaStatus.endDate==null?null:data.visaStatus.endDate.toString().split('T')[0],
              expiration: this.days_between(new Date(data.visaStatus.endDate), this.currentDate),
              // expiration:M
              action: "send notification",
              startDate: data.visaStatus.startDate.toString().split('T')[0]

            }
          }
        )
      });
  }
  submit(e: MouseEvent): void {
    e.preventDefault();
    // this.http.post('/api/visa/test', this.opt_step);

    this.httpClient.post('/api/visa/visastatus', {
      "opt_step": this.opt_step
    }).subscribe(
      res => {
      },
      err => console.log(err)
    );

    location.reload();
  }
  getWorkAuthorization(i:number): void {


    this.original_name=this.user_status_info_list[i].name;
    this.original_work_authorization=this.user_status_info_list[i].work_authorization;
    this.original_start_date=this.user_status_info_list[i].startDate;
    this.original_end_date=this.user_status_info_list[i].endDate;
    // location.reload();
  }



  editmode = true;
  form: any;
  edit(i:number) {
    //TODO change to the mouse event to finish double-click change the values
    this.editmode = true;
    this.original_name=this.user_status_info_list[i].name;
    this.original_work_authorization=this.user_status_info_list[i].work_authorization;
    this.original_start_date=this.user_status_info_list[i].startDate;
    this.original_end_date=this.user_status_info_list[i].endDate;
  }

  submitForm(i:number): void {
    console.log(this.validateForm.value);
    this.validateForm.controls['userId'].setValue(this.user_status_info_list[i].id);
    console.log(this.validateForm.value);
    let info = this.validateForm.value;
    this.http.post('/api/visa/update/work_authoization_application_form', info);
  }
  original_name:any;
  original_work_authorization:any;
  original_start_date:any;
  original_end_date:any;
  disabled=true;
  doubleClick(): void{
    this.editmode=!this.editmode;
  }

}
