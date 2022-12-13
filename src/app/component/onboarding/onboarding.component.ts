import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor() { }

  uploadUrl: string = '/api/employee/file/upload'
  downloadUrl: string = '/api/employee/file/download'

  info: object = {
    "fileType": "test"
  }


  ngOnInit(): void {
  }

}
