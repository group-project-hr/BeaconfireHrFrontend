import { Component, OnInit } from '@angular/core';
import {UserFilesService} from "../../service/user-files.service";
import {from, Subscription} from "rxjs";
import {HttpService} from "../../service/http.service";
import {HttpClient} from "@angular/common/http";
import {File} from "../../file";

@Component({
  selector: 'app-user-files-list',
  templateUrl: './user-files-list.component.html',
  styleUrls: ['./user-files-list.component.css']
})
export class UserFilesListComponent implements OnInit {
  files: Array<any>;
  selectedFile: File | undefined;

  constructor(private userFilesService: UserFilesService,private http: HttpService,private httpClient: HttpClient) {
    this.files = [];
  }


  ngOnInit(): void {
    localStorage.setItem("userid","1");
    let response = this.httpClient.get<any[]>('/api/visa/user/fileslist/'+localStorage.getItem("userid"))
      .subscribe(Response => {
        this.files = Response.map(
          data => (
            {
              id: data.id,
              // TODO make it available employeeid:data.employeeid,
              path: data.path,
              title: data.title,
              comment: data.comment,
              created_date:data.created_date,
              created_by:data.created_by
            }
          )
        )
      ;});


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
  downloadFile = (item: any) => {
    let formData = new FormData
    formData.append('file', item.file)
    return (this.httpClient.get('/api/visa/file/upload'));
  }
  goToLink(url: string){
    window.open("http://127.0.0.1:8887/i983.pdf", "_blank");
  }
}
