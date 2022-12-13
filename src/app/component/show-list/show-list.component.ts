import {Component, Injectable, OnInit} from '@angular/core';
import {HttpService} from "../../service/http.service";
import {from, map, Observable} from "rxjs";
import {File} from "../../file";
import {FILES} from "../../mock-file-lists";
import {HttpClient} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
@Injectable()
export class ShowListComponent implements OnInit {
  requiredData= new Array<String>()
  constructor(private http: HttpService,private httpClient: HttpClient) { }

  fileslist=["d","s"];

  items:any;
  address: string = '';
  id:number=0;
  employees: { name: string; phone: string }[] = [];
  selectedFile: File | undefined;
  ngOnInit(): void {
    console.log("here");
    let response = this.httpClient.get<any[]>('/api/visa/user/fileslist/1')
      .subscribe(Response => {
        this.items = Response.map(
          code => (
            {
              id: code.id,
              name: code.path
            }
          )
        )

        console.log(this.items);});

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
}
