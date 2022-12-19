import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpService } from 'src/app/service/http.service';
import {StorageService} from "../../../../service/storage.service";

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent implements OnInit {

  opt_step: number | undefined;
  // @Input() info: string | undefined;
  constructor(private http: HttpService, private httpClient: HttpClient,private storage:StorageService) { }
  //FIXME Change the userID
  userId: number | undefined;
  ngOnInit(): void {

    var userlocalData=localStorage.getItem("beaconfire-session");
    // @ts-ignore
    userlocalData=JSON.parse(userlocalData);
    // @ts-ignore
    // TODO finsihed but no data currently
    let userId=userlocalData.basicDataModel.userId;
    // this.userId='2';
    if(userId===3){
      userId=18;
    }
    let opt_repsonse = this.http.get('/api/visa/employee/' + userId)
      .then(((response) =>{
          // @ts-ignore
          let data = response.data;
          console.log(userId);
          console.log("data"+data.optStep);
        this.opt_step=data.optStep;
      })
        );
    // let opt_repsonse = this.httpClient.get<any>('/api/visa/employee/' + userId)
    //   .subscribe(
    //     (data: any) =>
    //     {
    //       this.opt_step = data.optStep;
    //     });
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

    this.http.post('/api/visa/visastatus', {
      "opt_step": this.opt_step
    }).then(res => {
    }).catch(error => {
      alert(error.response.data)
    })
    var userlocalData=localStorage.getItem("beaconfire-session");
    // @ts-ignore
    userlocalData=JSON.parse(userlocalData);
    // @ts-ignore
    // TODO finsihed but no data currently
    let userId=userlocalData.basicDataModel.userId;
    if(userId===3){
      userId=18;
    }
    let opt_repsonse = this.http.get('/api/visa/employee/' + userId)
      .then(((response) =>{

          // @ts-ignore
          let data = response.data;
        console.log(data)
          this.opt_step=data.optStep;
        })
      );
    location.reload();

  }
}
