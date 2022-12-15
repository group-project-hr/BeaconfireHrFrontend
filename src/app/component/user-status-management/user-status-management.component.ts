import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {HttpService} from "../../service/http.service";
import {HttpClient} from "@angular/common/http";
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {ControlValueAccessor} from "@angular/forms";


@Component({
  selector: 'app-user-status-management',
  templateUrl: './user-status-management.component.html',
  styleUrls: ['./user-status-management.component.css']
})
export class UserStatusManagementComponent implements OnInit {
  descriptionCodes={

    code:"dsadas",

  }
  cd:object={
    code:"dddd",
    descrption:"dadsa"
  }
  currentDate = new Date();
  documents_show: "Documents SHow" | undefined;
  files: Array<any>;
  user_status_info_list: Array<any>;
  opt_step: any;

  constructor(private http: HttpService, private httpClient: HttpClient,private el: ElementRef) {
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

  ngOnInit(): void {
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
              endDate: data.visaStatus.endDate.toString().split('T')[0],
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

  @Input()
  text: string | undefined;

  editmode = false;
  editText: string | undefined = '';
  edit() {
    this.editmode = true;
    this.editText = this.text;
  }

  save() {
    this.editmode = false;
    this.text = this.editText;
  }

  cancel() {
    this.editmode = false;
    this.editText = '';
  }

}
