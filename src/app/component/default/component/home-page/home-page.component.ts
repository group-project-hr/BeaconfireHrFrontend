import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private storage: StorageService) { }

  userinfo: any


  ngOnInit(): void {
    this.userinfo = this.storage.get("beaconfire-session");

  }

}
