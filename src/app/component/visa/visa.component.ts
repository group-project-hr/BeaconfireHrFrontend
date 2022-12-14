import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/http.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent implements OnInit {

  opt_step: number | undefined;

  constructor(private http: HttpService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    let opt_repsonse = this.httpClient.get<any>('/api/visa/employee/' + localStorage.getItem("userid"))
      .subscribe(
        (data: any) =>
        {
          this.opt_step = data.optStep;
        });
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
  info:string="test";
  fileType_1: string = "OPT Recipt";
  fileType_2: string = "OPT EAD";
  fileType_3: string = "I-983";
  fileType_4: string = "I-20";
  fileType_5: string = "OPT STEM Receipt";
  fileType_6: string = "OPT STEM EAD";



  uploadUrl: string = '/api/visa/file/upload'
  downloadUrl: string = '/api/visa/file/download'
}
