import {Component, Input, OnInit} from '@angular/core';
import {from, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as url from "url";
import {NzButtonSize} from "ng-zorro-antd/button";
import { HttpService } from 'src/app/service/http.service';

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
  userId: string | undefined;
  info: object = {
    "fileType": 'I-20'
  }
  updateFileType(i:number){
    var index = this.files[i].path.lastIndexOf('\\');
    var filename = this.files[i].path.substring(index + 1,);
    var filepath = this.files[i].path.substring(0,index);
    var filepath_index=filepath.lastIndexOf('\\');
    var fileType=filepath.substring(filepath_index+1,);
    // @ts-ignore
    this.info['fileType']=fileType;
    console.log(this.info);
  }
  downloadUrl: string = '/api/file/download'

  constructor(private http: HttpService, private httpClient: HttpClient) {
    this.files = [];
  }


  ngOnInit(): void {
    this.userId='2';
    let files_response = this.httpClient.get<any[]>('/api/visa/employee/fileslist'+this.userId)
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


  goToLink(url: string) {
    var index = url.lastIndexOf('\\');
    var filename = url.substring(index + 1,);
    var filepath = url.substring(0,index);
    var filepath_index=filepath.lastIndexOf('\\');
    var fileType=filepath.substring(filepath_index+1,);
    window.open("http://127.0.0.1:8887/" + fileType + '/' + filename, "_blank");
  }
}
