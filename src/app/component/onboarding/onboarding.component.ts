import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor() { }

  uploadUrl: string = '/api/file/upload'
  downloadUrl: string = '/api/file/download'

  info: object = {
    "fileType": "avatar"
  }


  ngOnInit(): void {
  }


}
