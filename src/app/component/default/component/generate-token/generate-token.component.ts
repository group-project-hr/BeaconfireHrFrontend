import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-generate-token',
  templateUrl: './generate-token.component.html',
  styleUrls: ['./generate-token.component.css']
})
export class GenerateTokenComponent implements OnInit {

  generateTokenForm: any;
  //TODO
  houseIds = []


  submitForm(): void {
    let info = this.generateTokenForm.value
    this.http.get('/authapi/auth/generate_token?email=' + this.generateTokenForm.value['email'] + "&houseId=" + this.generateTokenForm.value['houseId'])

    console.log(this.generateTokenForm.value);
  }

  ngOnInit(): void {
    this.generateTokenForm = this.fb.group({
      houseId: ['', [Validators.required],],
      email: ['', [Validators.required, Validators.email]],

    });

    this.http.get("/api/hr/housing/list").then((res: any) => {
      res.data.map((house: any) => {
       ( this.houseIds as string[]).push(house['id'])
      })
    }).catch(error => {

    })


  }

  constructor(private fb: UntypedFormBuilder, private http: HttpService) { }

}
