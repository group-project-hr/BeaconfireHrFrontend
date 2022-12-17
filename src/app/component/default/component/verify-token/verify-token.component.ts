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
    this.http.post('/authapi/auth/verify_token',verifyTokenRequest).then(res=>{
      window.location.href = '/default/registration';
    }).catch(error=>{
      console.log("error",error)
      alert(error.response.data)
    })

    console.log(this.generateTokenForm.value);
  }

  ngOnInit(): void {
    this.generateTokenForm = this.fb.group({
      token: ['', [Validators.required],],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  constructor(private fb: UntypedFormBuilder, private http: HttpService) { }


}
