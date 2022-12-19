import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  constructor(private storage: StorageService) { }

  userinfo: any

  ngOnInit(): void {
    this.userinfo = this.storage.get("beaconfire-session");
  }

  logout(){
    this.storage.remove("beaconfire-session")
    window.location.href = '/login'
  }

}
