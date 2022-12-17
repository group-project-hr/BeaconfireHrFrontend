import { Component, OnInit, Input } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {

  constructor(private http: HttpService) { }

  @Input() downloadUrl!: string;
  @Input() info!: any;

  ngOnInit(): void {
  }

  size: NzButtonSize = 'large';

  downloadFile = () => {

    this.http.post(this.downloadUrl, this.info,{responseType:'blob' }).then((res:any)=>{
      let blob = new Blob([res.data], { type: `text/plain;charset=utf-8` });
      
      let downloadElement = document.createElement("a");
      let href = window.URL.createObjectURL(blob);
        downloadElement.href = href;
        // fileNHame
        downloadElement.download = res.headers['content-disposition'];
        document.body.appendChild(downloadElement);
        // download file
        downloadElement.click();        
         // remove child
        document.body.removeChild(downloadElement);
    }).catch()
  }

}