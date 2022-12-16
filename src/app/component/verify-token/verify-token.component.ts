import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['./verify-token.component.css']
})
export class VerifyTokenComponent implements OnInit {

  generateTokenForm: any;
  //TODO
  houseIds = [1]


  submitForm(): void {
    let verifyTokenRequest = {
      token: this.generateTokenForm.value['token'],
      email: this.generateTokenForm.value['email']
    }
    this.http.post('/authapi/auth/verify_token',verifyTokenRequest)

    console.log(this.generateTokenForm.value);
  }

  ngOnInit(): void {
    this.generateTokenForm = this.fb.group({
      token: ['', [Validators.required],],
      email: ['', [Validators.required, Validators.email]],
    });

    // this.http.post


  }

  constructor(private fb: UntypedFormBuilder, private http: HttpService) { }


}
