import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {HttpService} from "../../service/http.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent implements OnInit {

  opt_step: number | undefined;
  // @Input() info: string | undefined;
  constructor(private http: HttpService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    localStorage.setItem("userid","2");
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
  info: object = {
    "fileType": "I-983"
  }
  fileType_1: string = "OPT Receipt";
  fileType_2: string = "OPT EAD";
  fileType_3: string = "I-983";
  fileType_4: string = "I-20";
  fileType_5: string = "OPT STEM Receipt";
  fileType_6: string = "OPT STEM EAD";

  uploadUrl: string = '/api/file/upload'
  downloadUrl: string = '/api/file/download'


  submit(e: MouseEvent): void {
    e.preventDefault();

    this.httpClient.post('/api/visa/visastatus', {
      "opt_step": this.opt_step
    }).subscribe(
      res => {
      },
      err => console.log(err)
    );
    let opt_repsonse = this.httpClient.get<any>('/api/visa/employee/' + localStorage.getItem("userid"))
      .subscribe(
        (data: any) =>
        {
          this.opt_step = data.optStep;
        });
    location.reload();

    // // @ts-ignore
    // // this.opt_step++;
    console.log(this.opt_step);
  }
}
