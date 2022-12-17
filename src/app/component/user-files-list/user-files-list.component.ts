import {Component, Input, OnInit} from '@angular/core';
import {UserFilesService} from "../../service/user-files.service";
import {from, Subscription} from "rxjs";
import {HttpService} from "../../service/http.service";
import {HttpClient} from "@angular/common/http";
import {File} from "../../file";
import * as url from "url";
import {NzButtonSize} from "ng-zorro-antd/button";

@Component({
  selector: 'app-user-files-list',
  templateUrl: './user-files-list.component.html',
  styleUrls: ['./user-files-list.component.css']
})
export class UserFilesListComponent implements OnInit {
  files: Array<any>;
  visa_status: any;
  selectedFile: File | undefined;
  size: NzButtonSize = 'large';
  opt_step: number | undefined;
  // info={
  //   userId:[null],
  //   work_authorization:[null],
  //   startDate: [null],
  //   endDate:[null],
  // }
  info: object = {
    "fileType": null
  }
  updateFileType(i:number){
    console.log("firstly");
    console.log(this.files[i].title)
  }
  downloadUrl: string = '/api/file/download'

  constructor(private http: HttpService, private httpClient: HttpClient) {
    this.files = [];
  }


  ngOnInit(): void {
    localStorage.setItem("userid", "2");
    // @ts-ignore
    // this.info['userId']=localStorage.getItem('userid');
    // console.log("ddd"+this.info['userId']);
    let files_response = this.httpClient.get<any[]>('/api/visa/employee/fileslist/' + localStorage.getItem("userid"))
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


  }

  onSelect(file: File): void {
    this.selectedFile = file;
  }

  uploadFile = (item: any) => {
    let formData = new FormData
    formData.append('file', item.file)
    return from(this.http.post('/api/visa/file/upload', formData)).subscribe(res => {
      item.onSuccess(item.file);
    }, err => {
      item.onError(err, item.file)
    })
  }
  // downloadFile = () => {
  //
  //   this.http.post(this.downloadUrl, this.info, {responseType: 'blob'}).then((res: any) => {
  //     let blob = new Blob([res.data], {type: `text/plain;charset=utf-8`});
  //
  //     let downloadElement = document.createElement("a");
  //     let href = window.URL.createObjectURL(blob);
  //     downloadElement.href = href;
  //     // fileNHame
  //     downloadElement.download = res.headers['content-disposition'];
  //     document.body.appendChild(downloadElement);
  //     // download file
  //     downloadElement.click();
  //     // remove child
  //     document.body.removeChild(downloadElement);
  //   }).catch()
  // }

  goToLink(url: string) {
    var index = url.lastIndexOf('\\');
    var filename = url.substring(index + 1,);
    window.open("http://127.0.0.1:8887/" + localStorage.getItem("userid") + '/' + filename, "_blank");
  }
}
