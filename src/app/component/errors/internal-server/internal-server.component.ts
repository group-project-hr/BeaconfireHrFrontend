import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-server',
  templateUrl: './internal-server.component.html',
  styleUrls: ['./internal-server.component.css'],
})
export class InternalServerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  errorMessage: string =
    '500 Internal Server Error, Please contact the Admin!!!!';
}
