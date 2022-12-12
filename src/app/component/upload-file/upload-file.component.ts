import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  uploadFile = (item: any) => {
    let formData = new FormData
    formData.append('file', item.file)
    return from(this.http.post('/api/employee/file/upload', formData)).subscribe(res => {
      item.onSuccess(item.file);
    }, err => {
      item.onError(err, item.file)
    })
  }

}


